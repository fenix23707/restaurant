DROP TABLE reviews;
DROP TABLE book_tables;
DROP TABLE tables;
DROP TABLE scheme;
DROP TABLE restaurants;
DROP TABLE user_info;
DROP TABLE users;

CREATE TABLE users(
    PRIMARY KEY(id),
	id          serial,     
	login       varchar(255)    NOT NULL	UNIQUE,    
	password    varchar(100)    NOT NULL,	
	role 		smallint 		NOT NULL 	DEFAULT 0,	
	status 		smallint 		NOT NULL 	DEFAULT 0
);

CREATE TABLE user_info 
(
	PRIMARY KEY(id),	
	id			serial,	
	name		varchar(255)	NOT NULL,
	birthday	date			NOT NULL,	
	phone		varchar(100)	NOT NULL	UNIQUE,	
	avatar		varchar(255),	
	email		varchar(255)				UNIQUE,	
	user_id 	serial
);

CREATE TABLE restaurants
(
	PRIMARY KEY(id),
	id		serial,	
	name 	varchar(255)	NOT NULL	UNIQUE,
	adres 	varchar(255)	NOT NULL,
	avatar 	varchar(255),
	user_id serial
);

CREATE TABLE schemes
(
	PRIMARY KEY(id),	
	id 				serial,	
	width 			smallint		NOT NULL	CHECK(width BETWEEN 1 and 10000),
	height 			smallint		NOT NULL	CHECK(height BETWEEN 1 and 10000),
	restaurant_id 	serial
);

CREATE TABLE tables
(
	PRIMARY KEY(id),	
	id 			serial,	
	capacity 	smallint	NOT NULL 	CHECK(capacity BETWEEN 1 and 5000),
	width 		smallint	NOT NULL 	CHECK(width BETWEEN 1 and 10000),
	height 		smallint	NOT NULL 	CHECK(height BETWEEN 1 and 10000),
	x 			smallint	NOT NULL 	CHECK(x BETWEEN 0 and 10000),
	y 			smallint	NOT NULL	CHECK(y BETWEEN 0 and 10000),
	scheme_id	serial
);

CREATE TABLE book_tables
(
	PRIMARY KEY(id),
	id 				serial,	
	datetime_begin	timestamp	NOT NULL,
	datetime_end 	timestamp 	NOT NULL	CHECK(datetime_end > datetime_begin),
	capacity 		smallint	NOT NULL	CHECK(capacity BETWEEN 1 and 5000),
	status 			smallint 	NOT NULL,
	table_id 		serial,
	user_id 		serial	
);

CREATE TABLE reviews 
(
	PRIMARY KEY(id),
	id 				serial,	
	rate 			smallint 	NOT NULL	CHECK(rate BETWEEN 0 and 10),
	review 			text,
	date 			timestamp	NOT NULL,
	user_id 		serial,
	restaurant_id	serial 	
);


ALTER TABLE user_info ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE restaurants ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE schemes ADD CONSTRAINT fk_restaurant_id FOREIGN KEY(restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE tables ADD CONSTRAINT fk_scheme_id FOREIGN KEY(scheme_id) REFERENCES schemes(id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE book_tables ADD CONSTRAINT fk_table_id FOREIGN KEY(table_id) REFERENCES tables(id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE book_tables ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE reviews ADD CONSTRAINT fk_restaurant_id FOREIGN KEY(restaurant_id) REFERENCES restaurants(id) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE users ADD CONSTRAINT role_range CHECK(role BETWEEN 0 and 2);
ALTER TABLE users ADD CONSTRAINT status_range CHECK(status BETWEEN 0 and 1);
ALTER TABLE book_tables ADD CONSTRAINT status_range CHECK(status BETWEEN 0 and 1);

INSERT INTO users (login, password, role) VALUES('logiiiin1', 'passssword', 0);
INSERT INTO users (login, password, role) VALUES('logiiiin2', 'passssword', 0);
INSERT INTO users (login, password, role) VALUES('logiiiin3', 'passssword', 0);
INSERT INTO users (login, password, role) VALUES('logiiiin4', 'passssword', 0);
INSERT INTO users (login, password, role) VALUES('logiiiin5', 'passssword', 0);
INSERT INTO users (login, password, role) VALUES('logiiiin6', 'passssword', 1);
INSERT INTO users (login, password, role) VALUES('logiiiin7', 'passssword', 1);
INSERT INTO users (login, password, role) VALUES('logiiiin8', 'passssword', 1);
INSERT INTO users (login, password, role) VALUES('logiiiin9', 'passssword', 1);
INSERT INTO users (login, password, role) VALUES('logiiiin20', 'passssword', 2);


INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Foss Bergeon', '201-06-20T14:34:46Z', '+670 (139) 450-0604', 'SedTristiqueIn.avi', 'fbergeon0@opera.com', 1);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Gusty Leither', '2000-03-05T00:25:32Z', '+850 (422) 233-9223', 'TinciduntEgetTempus.xls', 'gleither1@mozilla.org', 2);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Selig Edwicke', '2000-08-06T13:29:05Z', '+66 (383) 980-8122', 'HabitassePlatea.xls', 'sedwicke2@vk.com', 3);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Uriel Ghelerdini', '2001-05-12T22:15:27Z', '+225 (274) 467-5272', 'VelitVivamusVel.mp3', 'ughelerdini3@oaic.gov.au', 4);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Nye Ebbotts', '2001-01-29T07:55:34Z', '+86 (134) 773-9896', 'Tempus.xls', 'nebbotts4@deviantart.com', 5);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Jenica Cortez', '1982-12-05T07:57:35Z', '375(610)817-0750', null, 'jcortez0@domainmarket.com', 1);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Clemente Sincock', '1990-01-29T14:36:46Z', '30(636)926-1930', 'UtAtDolor.doc', 'csincock1@msn.com', 2);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Camey Brennen', '1988-12-22T01:21:52Z', '86(184)108-2672', 'MagnisDis.avi', 'cbrennen2@mlb.com', 3);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Glenda Alyonov', '1987-08-24T00:43:35Z', '352(352)881-0124', null, 'galyonov3@google.com.br', 4);
INSERT INTO user_info (name, birthday, phone, avatar, email, user_id) VALUES ('Odille Girardet', '1994-03-16T07:17:28Z', '7(267)471-0809', null, 'ogirardet4@businessweek.com', 5);

INSERT INTO restaurants (name, avatar, adres, user_id) VALUES ('Kare', 'Convallis.jpeg', '120 Autumn Leaf Center', 1);
INSERT INTO restaurants (name, avatar, adres, user_id) VALUES ('Gabcube', 'Aliquam.txt', '6 Boyd Terrace', 2);
INSERT INTO restaurants (name, avatar, adres, user_id) VALUES ('Wikivu', 'Dis.xls', '943 Moose Point', 3);
INSERT INTO restaurants (name, avatar, adres, user_id) VALUES ('Kazu', null, '92605 Darwin Junction', 4);
INSERT INTO restaurants (name, avatar, adres, user_id) VALUES ('Zazio', null, '62 Express Terrace', 5);

INSERT INTO schemes (width, height, restaurant_id) VALUES (100, 100, 1);
INSERT INTO schemes (width, height, restaurant_id) VALUES (200, 100, 2);
INSERT INTO schemes (width, height, restaurant_id) VALUES (50, 100, 3);
INSERT INTO schemes (width, height, restaurant_id) VALUES (100, 400, 4);
INSERT INTO schemes (width, height, restaurant_id) VALUES (100, 600, 5);

INSERT INTO tables (capacity, width, height, x, y, scheme_id) VALUES (4, 2, 2 , 0, 0, 1);
INSERT INTO tables (capacity, width, height, x, y, scheme_id) VALUES (4, 2, 2 , 10, 10, 1);
INSERT INTO tables (capacity, width, height, x, y, scheme_id) VALUES (4, 2, 2 , 10, 20, 1);
INSERT INTO tables (capacity, width, height, x, y, scheme_id) VALUES (2, 1, 2 , 0, 0, 2);
INSERT INTO tables (capacity, width, height, x, y, scheme_id) VALUES (2, 1, 2 , 10, 10, 2);

INSERT INTO book_tables (datetime_begin, datetime_end, capacity, status, table_id, user_id) VALUES ('2021-09-08T08:00:00Z', '2021-09-08T10:00:00Z', 2, 0, 1, 6);
INSERT INTO book_tables (datetime_begin, datetime_end, capacity, status, table_id, user_id) VALUES ('2021-09-08T10:00:00Z', '2021-09-08T12:00:00Z', 2, 0, 1, 7);
INSERT INTO book_tables (datetime_begin, datetime_end, capacity, status, table_id, user_id) VALUES ('2021-09-08T12:00:00Z', '2021-09-08T14:00:00Z', 2, 0, 1, 8);
INSERT INTO book_tables (datetime_begin, datetime_end, capacity, status, table_id, user_id) VALUES ('2021-09-08T14:00:00Z', '2021-09-08T16:00:00Z', 2, 0, 1, 9);
INSERT INTO book_tables (datetime_begin, datetime_end, capacity, status, table_id, user_id) VALUES ('2021-09-08T16:00:00Z', '2021-09-08T18:00:00Z', 2, 0, 1, 10);

INSERT INTO reviews (rate, review, date, user_id, restaurant_id) VALUES (1, 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.', '2020-11-26T19:06:44Z', 6, 1);
INSERT INTO reviews (rate, review, date, user_id, restaurant_id) VALUES (2, 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', '2021-03-23T08:25:39Z', 7, 2);
INSERT INTO reviews (rate, review, date, user_id, restaurant_id) VALUES (3, null, '2020-10-12T15:13:07Z', 8, 3);
INSERT INTO reviews (rate, review, date, user_id, restaurant_id) VALUES (4, 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.', '2021-04-16T21:55:38Z', 9, 4);
INSERT INTO reviews (rate, review, date, user_id, restaurant_id) VALUES (5, 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', '2021-05-06T11:17:47Z', 10, 5);

