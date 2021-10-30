-- Написать представление, которое будет выводить список пользователей и их средний чек для выполненных заказов(login пользователя, средний чек)
CREATE VIEW vw_average_check
AS
SELECT u.login, AVG(price::numeric) as avg_check
FROM users u
LEFT JOIN orders o on u.id = o.user_id
WHERE o.status = 'F'
GROUP BY u.login;

-- Написать пользовательскую функцию, которая будет списывать сумму с вашего счета, если это возможно
--  (входные параметры - login пользователя, сумма, возвращаемое значение - остаток на счете)
CREATE OR REPLACE FUNCTION take_money(login VARCHAR(255), amount money)  
RETURNS money AS $$ 
    UPDATE accounts
    SET value = value - take_money.amount
    WHERE user_id = (
                        SELECT id
                        FROM users
                        WHERE users.login = take_money.login
                    ) AND
        value >= take_money.amount;
    
    SELECT value 
    FROM accounts
    WHERE user_id =  (
                        SELECT id
                        FROM users
                        WHERE users.login = take_money.login
                    );
$$LANGUAGE SQL;  


-- Написать хранимую процедуру, которая будет рассчитывать сумму заказа пользователя и скидку на заказ, исходя из стоимости доставки (если таковая имеется)
--  и стоимости товаров в корзине.

CREATE OR REPLACE PROCEDURE calculate(order_id BIGINT, customer_id BIGINT, INOUT price MONEY, INOUT discount MONEY )
AS $$
DECLARE
    total_delivery_price MONEY := 0;
BEGIN
    SELECT sum(b.price), sum(b.discount) 
    INTO price, discount
    FROM basket b
    WHERE b.order_id = calculate.order_id AND
          b.customer_id =  calculate.customer_id;
    
    total_delivery_price := (  SELECT sum(d.price)
                        FROM delivery_orders dor
                        LEFT JOIN delivery d on d.id = dor.delivery_id
                        WHERE dor.order_id = calculate.order_id
                    );
    IF total_delivery_price IS NOT NULL THEN
        price := price + total_delivery_price;
    END IF;
END;
$$LANGUAGE plpgsql;

 call calculate(1, 1, 1::money, 1::money);


-- Написать триггер, который будет пересчитывать сумму заказа пользователя и скидку на заказ, при изменении корзины товаров в заказе. 

CREATE OR REPLACE FUNCTION change_basket() RETURNS trigger AS $change_basket$
<<main>>
DECLARE
    price money := 0;
    discount money := 0;
    order_id BIGINT;
    customer_id BIGINT;
BEGIN
    IF NEW.customer_id IS NOT NULL THEN
        order_id := NEW.order_id;
        customer_id :=  NEW.customer_id;
    ELSE
           order_id := OLD.order_id;
        customer_id :=  OLD.customer_id;
    END IF;
    call calculate(main.order_id, main.customer_id, main.price, main.discount);
    UPDATE orders SET price = main.price, discount = main.discount WHERE id = main.order_id; 
    RETURN NEW;
END;
$change_basket$ LANGUAGE plpgsql;

CREATE TRIGGER change_basket
        AFTER INSERT OR UPDATE OR DELETE ON basket
        FOR EACH ROW
            EXECUTE FUNCTION change_basket();
            

-- test
UPDATE basket SET price = 660 WHERE id = 1;
DELETE FROM basket where id = 1;
INSERT INTO basket(id, order_id, customer_id, product_id, price, discount, quantity, create_at) VALUES (1, 1, 1, 5, 650, 49, 1, '2/24/2021 2:42:57 PM');
SELECT * FROM orders where id = 1;
SELECT * FROM basket where id = 1;
SELECT * FROM delivery;



-- Написать триггер, который будет устанавливать статус заказа "Оплачен", если заказ полностью оплачен, и списывать с остатков на складе то количество товара,
--  которое было в заказе.

CREATE OR REPLACE FUNCTION total_payments(order_id BIGINT) RETURNS MONEY AS $$
DECLARE 
    total MONEY := 0;
BEGIN
    SELECT sum(value) INTO total
    FROM payments_orders po 
    WHERE po.order_id = total_payments.order_id;
    
    RETURN total;
END;
$$LANGUAGE plpgsql;


CREATE OR REPLACE PROCEDURE write_off_products(order_id BIGINT) AS $$
BEGIN
    UPDATE products SET quantity = quantity - (
                                                SELECT basket.quantity
                                                FROM basket
                                                WHERE   basket.order_id = write_off_products.order_id AND
                                                        basket.product_id = products.id
                                            )
    WHERE id IN (
                SELECT product_id 
                FROM basket
                WHERE basket.order_id = write_off_products.order_id
                );
END;
$$LANGUAGE plpgsql;

-- trigger function
CREATE OR REPLACE FUNCTION change_payments() RETURNS trigger AS $change_payments$
DECLARE
    order_price MONEY := 0;
BEGIN
    SELECT price INTO order_price
    FROM orders
    WHERE id = OLD.order_id;

    IF order_price <= total_payments(NEW.order_id) THEN
        UPDATE orders SET status = 'P' WHERE id = NEW.order_id;
        CALL write_off_products(NEW.order_id); -- maybe there is error, didn't test
    END IF;

    RETURN NEW;
END;
$change_payments$ LANGUAGE plpgsql;

-- create trigger
CREATE TRIGGER change_payments
AFTER INSERT OR UPDATE ON payments_orders
FOR EACH ROW
EXECUTE FUNCTION change_payments();


-- test
UPDATE payments_orders SET  value = 697 WHERE order_id = 1;
SELECT * FROM payments_orders where order_id = 1;
SELECT * FROM orders where id = 1;

SELECT * FROM basket where order_id = 1;
SELECT * FROM products where id = 5;
call write_off_products(1);
