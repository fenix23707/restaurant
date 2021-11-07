
EXPLAIN ANALYZE SELECT r.* , s.width, s.height, rev.rate
FROM restaurants r
INNER JOIN schemes s ON s.restaurant_id = r.id
INNER JOIN reviews rev ON rev.restaurant_id = r.id
WHERE rev.rate > 3
ORDER BY r.avatar ASC NULLS LAST
LIMIT 10;


--  In the case of a node executed more than once, the actual time is an average of each iteration and you would multiply the value by the number of loops
--  to get real time. 
DROP INDEX restaurants_avatar_ix;
DROP INDEX review_restaurant_id_ix;
DROP INDEX schemes_restaurant_id_ix;

CREATE INDEX restaurants_avatar_ix ON restaurants(avatar ASC NULLS LAST);
CREATE INDEX review_restaurant_id_ix ON reviews(restaurant_id); 
CREATE INDEX schemes_restaurant_id_ix ON schemes(restaurant_id); 


SELECT
    tablename,
    indexname,
    indexdef
FROM
    pg_indexes
WHERE tablename = 'schemes' OR tablename = 'restaurants' OR tablename = 'reviews'
ORDER BY
    tablename,
    indexname;