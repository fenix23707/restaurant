CREATE TABLE `User` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`login` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`role` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Restaurant` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`user_id` INT NOT NULL,
	`schema_id` INT NOT NULL,
	`restaurant_feedback_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Table` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`free` BOOLEAN NOT NULL DEFAULT 'возможно не нужное поле, т.к. это можно будет понимать через book_table',
	`capacity` INT NOT NULL,
	`x` INT NOT NULL,
	`y` INT NOT NULL,
	`width` INT NOT NULL,
	`height` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Feedback` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`rate` INT NOT NULL AUTO_INCREMENT,
	`description` TEXT NOT NULL,
	`user_id` INT NOT NULL,
	`restaurant_feedback_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `User_Info` (
	`id` INT NOT NULL,
	`avatar` varchar(255) NOT NULL,
	`dob` DATE NOT NULL,
	`phone` varchar(50) NOT NULL,
	`email` varchar(200) NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Scheme` (
	`id` INT NOT NULL,
	`width` INT NOT NULL,
	`height` INT NOT NULL,
	`table_id` INT NOT NULL,
	`restaurant_id` INT NOT NULL
);

CREATE TABLE `Restaurant_Feedback` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`restaurant_id` INT NOT NULL AUTO_INCREMENT,
	`feedback_id` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Book_Table` (
	`id` INT NOT NULL,
	`dateTimeFrom` DATETIME NOT NULL,
	`dateTimeTo` DATETIME NOT NULL,
	`table_id` INT NOT NULL,
	`user_id` INT NOT NULL
);

CREATE TABLE `User_History` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`dateTime` DATETIME NOT NULL,
	`description` varchar(255) NOT NULL,
	`user_id` INT(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Restaurant` ADD CONSTRAINT `Restaurant_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `Restaurant` ADD CONSTRAINT `Restaurant_fk1` FOREIGN KEY (`schema_id`) REFERENCES `Scheme`(`id`);

ALTER TABLE `Restaurant` ADD CONSTRAINT `Restaurant_fk2` FOREIGN KEY (`restaurant_feedback_id`) REFERENCES `Restaurant_Feedback`(`id`);

ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_fk1` FOREIGN KEY (`restaurant_feedback_id`) REFERENCES `Restaurant_Feedback`(`id`);

ALTER TABLE `User_Info` ADD CONSTRAINT `User_Info_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `Scheme` ADD CONSTRAINT `Scheme_fk0` FOREIGN KEY (`table_id`) REFERENCES `Table`(`id`);

ALTER TABLE `Scheme` ADD CONSTRAINT `Scheme_fk1` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurant`(`id`);

ALTER TABLE `Restaurant_Feedback` ADD CONSTRAINT `Restaurant_Feedback_fk0` FOREIGN KEY (`restaurant_id`) REFERENCES `Restaurant`(`id`);

ALTER TABLE `Restaurant_Feedback` ADD CONSTRAINT `Restaurant_Feedback_fk1` FOREIGN KEY (`feedback_id`) REFERENCES `Feedback`(`id`);

ALTER TABLE `Book_Table` ADD CONSTRAINT `Book_Table_fk0` FOREIGN KEY (`table_id`) REFERENCES `Table`(`id`);

ALTER TABLE `Book_Table` ADD CONSTRAINT `Book_Table_fk1` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `User_History` ADD CONSTRAINT `User_History_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);










