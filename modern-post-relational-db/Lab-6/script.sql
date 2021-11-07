-- create several child tables
-- Add non-overlapping table constraints to the partition tables to define the allowed key values in each partition.
CREATE TABLE book_tables_process (
    CHECK (status = 0)
) INHERITS (book_tables);

CREATE TABLE book_tables_done (
    CHECK (status = 1)
) INHERITS (book_tables);

CREATE TABLE book_tables_cancel (
    CHECK (status = 2)
) INHERITS (book_tables);

-- insert
CREATE OR REPLACE FUNCTION book_tables_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.status = 0) THEN
        INSERT INTO book_tables_process VALUES(NEW.*);
    ELSIF (NEW.status = 1) THEN 
        INSERT INTO book_tables_done VALUES(NEW.*);
    ELSIF (NEW.status = 2) THEN
        INSERT INTO book_tables_cancel VALUES(NEW.*);
    ELSE
        RAISE EXCEPTION 'status out of range.  Fix the book_table_insert_update_trigger() function!';
    END IF;
    RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER book_tables_insert_trigger
    BEFORE INSERT ON book_tables
    FOR EACH ROW EXECUTE FUNCTION book_tables_insert_trigger();


DROP FUNCTION book_tables_insert_trigger();
DROP TRIGGER book_tables_insert_trigger ON book_tables;

-- update 
-- process
CREATE OR REPLACE FUNCTION book_tables_process_update_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.status <> 0) THEN
        DELETE FROM  book_tables_process WHERE id = NEW.id;
        INSERT INTO book_tables VALUES(NEW.*);
    END IF;
    RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER book_tables_process_update_trigger
    BEFORE UPDATE ON book_tables_process
    FOR EACH ROW EXECUTE FUNCTION book_tables_process_update_trigger();

-- done
CREATE OR REPLACE FUNCTION book_tables_done_update_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.status <> 1) THEN
        DELETE FROM  book_tables_done WHERE id = NEW.id;
        INSERT INTO book_tables VALUES(NEW.*);
    END IF;
    RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER book_tables_done_update_trigger
    BEFORE UPDATE ON book_tables_done
    FOR EACH ROW EXECUTE FUNCTION book_tables_done_update_trigger();

-- cancel
CREATE OR REPLACE FUNCTION book_tables_cancel_update_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.status <> 2) THEN
        DELETE FROM  book_tables_cancel WHERE id = NEW.id;
        INSERT INTO book_tables VALUES(NEW.*);
    END IF;
    RETURN NULL;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER book_tables_cancel_update_trigger
    BEFORE UPDATE ON book_tables_cancel
    FOR EACH ROW EXECUTE FUNCTION book_tables_cancel_update_trigger();
    

-- drop tables

DROP TABLE book_tables_process;
DROP TABLE book_tables_done;
DROP TABLE book_tables_cancel;

-- test

DELETE FROM book_tables;
DELETE FROM book_tables where id = 35;

INSERT INTO book_tables (datetime_begin, datetime_end, capacity, status, table_id, user_id) VALUES 
('2021-09-08T08:00:00Z', '2021-09-08T10:00:00Z', 2, 1, 1, 6),
('2021-09-08T10:00:00Z', '2021-09-08T12:00:00Z', 2, 1, 1, 7),
('2021-09-08T12:00:00Z', '2021-09-08T14:00:00Z', 2, 2, 1, 8),
('2021-09-08T14:00:00Z', '2021-09-08T16:00:00Z', 2, 0, 1, 9),
('2021-09-08T16:00:00Z', '2021-09-08T18:00:00Z', 2, 0, 1, 10);

UPDATE book_tables SET status = 1 where status = 0;
UPDATE book_tables SET status = 0 where status = 1;
UPDATE book_tables SET status = 1 where status = 2;
UPDATE book_tables SET status = 2 where id = 35;

SELECT * FROM book_tables;
EXPLAIN SELECT * FROM book_tables where status = 0;
EXPLAIN SELECT * FROM book_tables where status = 0 AND user_id = 9;
EXPLAIN SELECT * FROM book_tables where status = 3 AND user_id = 9;
EXPLAIN SELECT * FROM book_tables where status = 0 OR status = 1 AND user_id = 9;