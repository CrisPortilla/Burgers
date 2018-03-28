CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
	burgerName VARCHAR(30),
	devoured BOOLEAN,
	PRIMARY KEY (id)
);
