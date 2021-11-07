-- restaurants
INSERT INTO restaurants(name, avatar, adres, user_id)
WITH expanded AS (
  SELECT RANDOM(), seq, u.id AS user_id
  FROM GENERATE_SERIES(1, 500000) seq, users u
), shuffled AS (
  SELECT e.*
  FROM expanded e
  INNER JOIN (
    SELECT ei.seq, MIN(ei.random) FROM expanded ei GROUP BY ei.seq
  ) em ON (e.seq = em.seq AND e.random = em.min)
  ORDER BY e.seq
)
SELECT
  'name' || round( date_part('epoch', now())) * RANDOM(),
  (CASE (RANDOM() * 2)::INT
      WHEN 0 THEN 'avatar' || round( date_part('epoch', now())) * RANDOM()
      WHEN 1 THEN 'C:\avatar' || round( date_part('epoch', now())) * RANDOM()
      WHEN 2 THEN NULL
    END
  ) as avatar,
   (CASE (RANDOM() * 1)::INT
      WHEN 0 THEN 'adres' || round( date_part('epoch', now())) * RANDOM()
      WHEN 1 THEN round( date_part('epoch', now())) * RANDOM() || 'address'
    END
  ) as adres,
  s.user_id
FROM shuffled s;

-- schemes

INSERT INTO schemes(restaurant_id, width, height)
WITH restaurants_id AS(
    SELECT RANDOM() * 500000 + 1500000 AS restaurant_id
    FROM GENERATE_SERIES(1, 500000) seq
)
SELECT
  ri.restaurant_id,
  random() * 400 + 10,
  random() * 400 + 10
FROM restaurants_id ri;


-- reviews
WITH restaurants_id AS(
    SELECT RANDOM() * 500000 + 1500000 AS restaurant_id
    FROM GENERATE_SERIES(1, 500000) seq
)
INSERT INTO reviews(rate, review, date, user_id, restaurant_id)
SELECT 
    random() * 5,
    '',
    NOW(),
    RANDOM() * 9 + 1,
    random() * 2000000 
FROM restaurants_id ri;


INSERT INTO reviews(rate, review, date, user_id, restaurant_id)
SELECT 
    random() * 5,
    '',
    NOW(),
    RANDOM() * 9 + 1,
    random() * 2000000 
FROM GENERATE_SERIES(1, 1500000);

UPDATE restaurants SET adres = (CASE (RANDOM() * 1)::INT
      WHEN 0 THEN 'adres' || round( date_part('epoch', now())) * RANDOM()
      WHEN 1 THEN round( date_part('epoch', now())) * RANDOM() || 'address'
    END
  ), avatar = (CASE (RANDOM() * 2)::INT
      WHEN 0 THEN 'avatar' || round( date_part('epoch', now())) * RANDOM()
      WHEN 1 THEN 'C:\avatar' || round( date_part('epoch', now())) * RANDOM()
      WHEN 2 THEN NULL
    END
  ) ;



