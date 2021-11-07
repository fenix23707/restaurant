-- Вывести количество товаров для каждой категории.
select c.name, p.number_of_products
from categories c
LEFT join (
			SELECT category_id, COUNT(*) as number_of_products
			FROM products
			GROUP BY category_id
			) as p
on c.id=p.category_id;

-- Вывести список пользователей, которые не оплатили хотя бы 1 заказ полностью.
SELECT DISTINCT u.id
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
LEFT JOIN payments_orders po ON po.order_id = o.id
GROUP BY o.id, u.id
HAVING o.price > sum(po.value);


-- Удалить товары, которые ни разу не были куплены (отсутствуют информация в таблице basket).
-- отобразить
SELECT * FROM products 
WHERE id NOT IN (
                SELECT product_id
                FROM basket
                GROUP BY product_id
                );
-- удалить
DELETE FROM products 
WHERE id NOT IN (
                SELECT product_id
                FROM basket
                GROUP BY product_id
                );

-- Вывести заказы, которые оплачены только частично.
SELECT o.id, o.price, SUM(p.value)
FROM orders o
RIGHT JOIN payments_orders p on o.id = p.order_id
GROUP BY o.id
HAVING SUM(p.value) < o.price;

-- Вывести для каждого покупателя количество его заказов по статусам.
SELECT login,
(select COUNT(*) FROM orders WHERE user_id = u.id AND status = 'N') as status_N,
(select COUNT(*) FROM orders WHERE user_id = u.id AND status = 'D') as status_D,
(select COUNT(*) FROM orders WHERE user_id = u.id AND status = 'P') as status_P,
(select COUNT(*) FROM orders WHERE user_id = u.id AND status = 'F') as status_F,
(select COUNT(*) FROM orders WHERE user_id = u.id AND status = 'C') as status_C
FROM users u;



-- Вывести средний чек для выполненных заказов (status="F")
SELECT status, AVG(price::numeric)
FROM orders
GROUP BY status
HAVING status = 'F';

-- Вывести топ-10 самых продаваемых товаров по суммарной прибыли (заказы для этих товаров должны быть полностью оплачены).
SELECT p.id,p.name,p.price,p.quantity, p.discount, p.category_id, SUM(b.price) as profit
FROM products p
LEFT JOIN basket b on p.id = b.product_id
LEFT JOIN orders o on o.id = b.order_id
WHERE o.status IN ('P','F')
GROUP BY p.id
ORDER BY SUM(b.price) DESC
LIMIT 10;

-- Вывести список товаров, которые лежат пока только в корзине и не привязаны к заказу,
-- и их количества не хватает на складе для продажи (считается, что товар списывается со склада только тогда, когда заказ будет доставлен).
SELECT p.id, p.name, p.quantity
FROM products p
LEFT JOIN basket b on p.id = b.product_id
WHERE b.order_id IS NULL
GROUP BY p.id
HAVING SUM(b.quantity) > p.quantity;
--  - (
--                                         SELECT sum(b.quantity)
--                                         FROM basket b
--                                         LEFT JOIN orders o on o.id = b.order_id
--                                         WHERE product_id = p.id and o.status = 'N'
--                                         GROUP BY b.product_id
--                                     );

-- Вывести список пользователей, которые "бросили"  свои корзины (не оформили заказ) за последние 30 дней
SELECT u.id, u.login, b.create_at
FROM users u
LEFT JOIN customers c on c.user_id = u.id
LEFT JOIN basket b on b.customer_id = c.id
WHERE b.order_id IS NULL and b.create_at < NOW() - INTERVAL '30 day';

-- Добавить скидку 10% на все товары, которые покупались (статус заказов "P" или "F") не более 10 раз.
UPDATE products SET discount = discount + 0.1 * price where id in (
                                                        SELECT  product_id
                                                        FROM orders o
                                                        LEFT JOIN basket b on o.id = b.order_id 
                                                        WHERE o.status in ('P', 'F')
                                                        GROUP BY b.product_id
                                                        HAVING SUM(b.quantity) <= 10
                                                        );


-- отобразить результат
select * from products where id in (
                                                        SELECT  product_id
                                                        FROM orders o
                                                        LEFT JOIN basket b on o.id = b.order_id 
                                                        WHERE o.status in ('P', 'F')
                                                        GROUP BY b.product_id
                                                        HAVING SUM(b.quantity) <= 10
                                                        );

-- Вывести количество заказов оплаченных полностью с внутреннего счета. (не смог протестировать)

select sum(sums) FROM
(SELECT count(*) AS sums
FROM orders o
LEFT JOIN payments_orders p on o.id = p.order_id
WHERE p.payment_id IS NULL and p.from_account = TRUE
GROUP BY o.id
HAVING SUM(p.value) >= o.price) as ffff;

-- Сделать скидку 50% (без доставки, только на товары) на новые заказы (статус "N") для VIP-пользователей.
WITH orders_id AS (
    SELECT ord.id as order_id
    FROM accounts ac
    LEFT JOIN orders ord on ord.user_id = ac.user_id
    WHERE ord.status = 'N' and ac.is_vip = TRUE
),
prices AS (
    SELECT order_id, SUM(price) as total_price
    FROM basket
    WHERE order_id IN (SELECT order_id FROM orders_id)
    GROUP BY order_id
)
UPDATE orders SET price = price + discount - 0.5 * (SELECT total_price FROM prices WHERE order_id = orders.id), discount = 0.5 * (SELECT total_price FROM prices WHERE order_id = orders.id) -- пересчитать price из basket
WHERE id in ( SELECT order_id FROM orders_id);

--                                           ОСТАНОВИЛИСЬ ЗДЕСЬ

-- Вывести самую популярную доставку и самый популярный способ оплаты (результат из 2 записей)

-- (SELECT name, count(*)
-- FROM orders
-- GROUP BY name
-- ORDER BY count(*) DESC
-- LIMIT 1)
-- UNION
-- (SELECT CASE
--         WHEN  from_account = FALSE THEN 'из справочника'
--         WHEN  from_account = TRUE THEN 'со внутреннего счета'
--         END AS name, count(*)

-- FROM payments_orders
-- GROUP BY from_account
-- ORDER BY count(*) DESC
-- LIMIT 1);

(SELECT del.delivery_id
FROM orders o
LEFT JOIN delivery_orders del ON del.order_id = o.id
GROUP BY del.delivery_id
ORDER BY count(*) DESC
LIMIT 1)
UNION
(SELECT po.payment_id
FROM orders o
LEFT JOIN payments_orders po ON po.order_id = o.id
GROUP BY po.payment_id
ORDER BY count(*) DESC
LIMIT 1);
-- Удалить пустые категории. Пустые категории - категории без товаров?
-- DELETE 
-- FROM categories
-- WHERE 0 = (
--                 SELECT count(*)
--                 FROM products
--                 WHERE category_id = categories.id
--                 );

DELETE FROM categories WHERE id NOT IN ( 
	SELECT DISTINCT p.category_id 
		FROM products p		
	);
-- Вывести список пользователей, которые были оплачены полностью не более чем через час, с момента добавления первого товара в корзину.

-- сумма платежа в течение часа для определенного заказа
SELECT sum(value)
FROM payments_orders
WHERE order_id = 1 and create_at BETWEEN NOW() and NOW() + INTERVAL '1 hour';


-- поиск номера заказа и время первого товара для каждого пользователя
SELECT order_id, create_at, customer_id
FROM basket b
WHERE create_at = (
                    SELECT create_at
                    FROM basket
                    WHERE customer_id = b.customer_id
                    ORDER BY create_at
                    LIMIT 1
                );




-- результат:
SELECT u.id, u.login, u.password, b.order_id, b.create_at, b.customer_id
FROM basket b
LEFT JOIN orders o on o.id = b.order_id
LEFT JOIN users u on u.id = o.user_id
WHERE b.create_at = (
                    SELECT create_at
                    FROM basket
                    WHERE customer_id = b.customer_id
                    ORDER BY create_at
                    LIMIT 1
                ) 
    AND o.price <= (
                SELECT sum(value)
                FROM payments_orders
                WHERE order_id = b.order_id and create_at BETWEEN b.create_at and b.create_at + INTERVAL '1 hour'
                );


SELECT o.*, MIN(b.create_at)
FROM basket b
LEFT JOIN orders o on o.id = b.order_id
LEFT JOIN payments_orders p_o ON p_o.order_id = o.id
GROUP BY o.id
HAVING MIN(b.create_at) + INTERVAL '1 hour' < MAX(p_o.create_at) AND
        o.price <= SUM(p_o.value)
ORDER BY o.user_id;
-- Вернуть все деньги пользователей на внутренний счет для заказов, которые были оплачены (как внутренним счетом, так и некоторым способом оплаты)
--  и были отменены (status = "С").

-- UPDATE accounts SET value = value::numeric + COALESCE((   SELECT sum(p.value::numeric) as already_paid
--                                         FROM orders o
--                                         LEFT JOIN payments_orders p on o.id = p.order_id
--                                         WHERE o.status = 'C' and o.user_id = accounts.id
--                                         GROUP BY o.user_id
--                                     ), 0);


WITH money_return as (
    SELECT sum(p.value) as already_paid, o.user_id
    FROM orders o
    LEFT JOIN payments_orders p on o.id = p.order_id
    WHERE o.status = 'C'
    GROUP BY o.user_id                                    
    )
UPDATE accounts SET value = value + (select already_paid from money_return where user_id = id);