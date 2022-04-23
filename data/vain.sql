DROP DATABASE IF EXISTS vain;
CREATE DATABASE vain;

DROP SCHEMA IF EXISTS vain;
CREATE SCHEMA vain;

DROP TABLE IF EXISTS vain.book;
CREATE TABLE vain.book
(
	book_id serial PRIMARY KEY NOT NULL,
	type varchar(2) DEFAULT NULL,
	authorship varchar(2) DEFAULT NULL,
	subject varchar(2) DEFAULT NULL,
	title text,
	year int DEFAULT NULL,
	description text,
	namedPersons text,
	notes text,
	located varchar(450) DEFAULT NULL,
	modifiedBy varchar(45) DEFAULT NULL,
	lastUpdated date DEFAULT NULL,
	publisher text,
	author text

);

DROP TABLE IF EXISTS vain.publisher;
CREATE TABLE vain.publisher (
	publisher_id serial PRIMARY KEY NOT NULL ,
	publisher varchar(200) DEFAULT NULL,
	publisherLocation varchar(200) DEFAULT NULL,
	publisherfull varchar(200) DEFAULT NULL

) ;

DROP TABLE IF EXISTS vain.namedPersons;
CREATE TABLE  vain.namedPersons (
	author_id SERIAL PRIMARY KEY NOT NULL,
	name varchar(200) DEFAULT NULL,
	lifeYears varchar(20) DEFAULT NULL

) ;


DROP TABLE IF EXISTS vain.type;
CREATE TABLE vain.type (
	type_id varchar(2) NOT NULL,
	type varchar(45) DEFAULT NULL,
	PRIMARY KEY (type_id)
);
INSERT INTO vain.type VALUES ('A','Autobiography'),('B','Biography'),('C','Compilation'),('D','Diary/Journal'),('F','Fictional'),('G','Broadside'),('L','Letters'),('U','Unknown');


DROP TABLE IF EXISTS vain.subject;
CREATE TABLE vain.subject (
	subject varchar(45) DEFAULT NULL,
	subject_id varchar(2) NOT NULL,
	PRIMARY KEY (subject_id)
);
INSERT INTO vain.subject VALUES ('Adventure','A'),('Criminal','C'),('Domestic','D'),('Great Man','G'),('Historical','H'),('Literary','L'),('Military','M'),('Politics','P'),('Religious','R'),('Satire','S'),('Travel','T'),('Celebrity','CY'),('Middle-class, MC','MC'),('Social Critique','SC'),('School Days','SD'),('Theatre','TH'),('Unknown','U');


DROP TABLE IF EXISTS vain.author_book;
CREATE TABLE vain.author_book (
	author_id int NOT NULL,
	book_id int NOT NULL,
	PRIMARY KEY (author_id,book_id),
	CONSTRAINT fk_author_book_id FOREIGN KEY (book_id) REFERENCES vain.book (book_id) ON DELETE CASCADE,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES vain.namedPersons (author_id));

DROP TABLE IF EXISTS vain.publisher_book;
CREATE TABLE vain.publisher_book (
	publisher_id int NOT NULL,
	book_id int NOT NULL,
	PRIMARY KEY (publisher_id,book_id),
	CONSTRAINT fk_publisher_book_id FOREIGN KEY (book_id) REFERENCES vain.book (book_id) ON DELETE CASCADE,
	CONSTRAINT fk_publisher_id FOREIGN KEY (publisher_id) REFERENCES vain.publisher (publisher_id)
);

DROP TABLE IF EXISTS vain.author_book;
CREATE TABLE vain.author_book (
	author_id int NOT NULL,
	book_id int NOT NULL,
	PRIMARY KEY (author_id,book_id),
	CONSTRAINT fk_author_book_id FOREIGN KEY (book_id) REFERENCES vain.book (book_id) ON DELETE CASCADE,
	CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES vain.namedPersons (author_id));

DROP TABLE IF EXISTS vain.type_book;
CREATE TABLE vain.type_book (
	type_id varchar(2) NOT NULL,
	book_id int NOT NULL,
	PRIMARY KEY (type_id,book_id),
	CONSTRAINT fk_type_book_id FOREIGN KEY (book_id) REFERENCES vain.book (book_id) ON DELETE CASCADE,
	CONSTRAINT fk_type_id FOREIGN KEY (type_id) REFERENCES vain.type (type_id));

DROP TABLE IF EXISTS vain.subject_book;
CREATE TABLE vain.subject_book (
	subject_id varchar(2) NOT NULL,
	book_id int NOT NULL,
	PRIMARY KEY (subject_id,book_id),
	CONSTRAINT fk_subject_book_id FOREIGN KEY (book_id) REFERENCES vain.book (book_id) ON DELETE CASCADE,
	CONSTRAINT fk_subject_id FOREIGN KEY (subject_id) REFERENCES vain.subject (subject_id));
  