CREATE DATABASE student_db;
USE student_db;

CREATE TABLE students (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE notes (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	note varchar (255) NOT NULL,
	PRIMARY KEY (id)
);