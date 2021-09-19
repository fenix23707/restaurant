create database restaurant;


CREATE TABLE "user"(
    PRIMARY KEY(id),
	id          serial, 
    
	login       varchar(255)    NOT NULL	UNIQUE,
    
	password    varchar(100)    NOT NULL,
	
	role smallint NOT NULL,
	CONSTRAINT role_range CHECK(role BETWEEN 0 and 2)
);

CREATE TABLE user_info 
(
	PRIMARY KEY(id),	
	id			serial,
	
	name		varchar(255)	NOT NULL,
	
	birthday	date			NOT NULL,
	
	phone		varchar(100)	NOT NULL	UNIQUE,
	
	avatar		varchar(255)				UNIQUE,
	
	email		varchar(255)	NOT NULL	UNIQUE,
	
	user_id 	serial	REFERENCES "user"(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE restaurant
(
	PRIMARY KEY(id),	
	id	serial,
	
	name varchar(255)	NOT NULL UNIQUE,
	
	adres varchar(255)	NOT NULL,
	
	avatar varchar(255),
	
	user_id serial REFERENCES "user"(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE scheme
(
	PRIMARY KEY(id),	
	id serial,
	
	width smallint		NOT NULL,
	CONSTRAINT width_range CHECK(width BETWEEN 1 and 10000),
	
	height smallint		NOT NULL,
	CONSTRAINT height_range CHECK(width BETWEEN 1 and 10000),
	
	restaurant_id serial REFERENCES restaurant(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "table"
(
	PRIMARY KEY(id),	
	id serial,
	
	capacity smallint	NOT NULL,
	CONSTRAINT capacity_range CHECK(capacity BETWEEN 1 and 5000),
	
	width smallint		NOT NULL,
	CONSTRAINT width_range CHECK(width BETWEEN 1 and 10000),
	
	height smallint		NOT NULL,
	CONSTRAINT height_range CHECK(height BETWEEN 1 and 10000),
	
	x smallint		NOT NULL,
	CONSTRAINT x_range CHECK(x BETWEEN 0 and 10000),
	
	y smallint		NOT NULL,
	CONSTRAINT y_range CHECK(y BETWEEN 0 and 10000),
	
	scheme_id serial REFERENCES scheme(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE book_table
(
	PRIMARY KEY(id),
	id serial,
	
	datetime_begin timestamp NOT NULL,

	datetime_end timestamp NOT NULL,
	CONSTRAINT datetime_end_more_begin CHECK(datetime_end > datetime_begin),
	
	capacity smallint	NOT NULL,
	CONSTRAINT capacity_range CHECK(capacity BETWEEN 1 and 5000),
	
	status smallint NOT NULL,
	CONSTRAINT status_range CHECK(status BETWEEN 0 and 1),
	
	table_id serial REFERENCES "table"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	
	user_id serial REFERENCES "user"(id) ON DELETE RESTRICT ON UPDATE CASCADE	
);

CREATE TABLE reviews 
(
	PRIMARY KEY(id),
	id serial,
	
	rate smallint NOT NULL,
	CONSTRAINT rate_range CHECK(rate BETWEEN 0 and 10),
	
	review text,
	
	date timestamp NOT NULL,
	
	user_id serial REFERENCES "user"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
	
	restaurant_id serial REFERENCES restaurant(id) ON DELETE RESTRICT ON UPDATE CASCADE	
);