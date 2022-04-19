CREATE DATABASE vain;

DROP TABLE IF EXISTS vain.book;
CREATE TABLE vain.book
(
    book_id         SERIAL PRIMARY KEY,
    title           text,
    type            varchar(50),
    subject         varchar(50),
    year            int DEFAULT NULL,
    description     text,
    authorship      varchar(2) DEFAULT NULL,
    publisher       text,
    author          text,
    notes           text,
    located         varchar(450) DEFAULT NULL,
    modifiedBy      varchar(45) DEFAULT NULL,
    lastUpdated     date DEFAULT NULL,
    namedPersons    text

);
      

DROP TABLE IF EXISTS vain.publisher;
CREATE TABLE vain.publisher (
    publisher_id serial PRIMARY KEY NOT NULL ,
    publisher varchar(200) DEFAULT NULL,
    publisherLocation varchar(200) DEFAULT NULL,
    publisherfull varchar(200) DEFAULT NULL
);

DROP TABLE IF EXISTS vain.namedPersons;
CREATE TABLE  vain.namedPersons (
    author_id SERIAL PRIMARY KEY NOT NULL,
    name varchar(200) DEFAULT NULL,
    lifeYears varchar(20) DEFAULT NULL

);


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


CREATE TABLE vain.author(
    author_id SERIAL PRIMARY KEY,
    author_name varchar(50)
);





