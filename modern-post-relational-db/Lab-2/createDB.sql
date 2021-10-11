create database restaurant;


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