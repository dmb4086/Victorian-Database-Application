// -- CREATE DATABASE vain;
// -- CREATE SCHEMA vain;

const CheckifDBExists = "SELECT datname FROM pg_catalog.pg_database where datname ='vain';"
const createDB = `


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
  `

  // INSERTS -- 
  const insertBook = `INSERT INTO book ( title, type, subject, year, description, authorship, publisher, author, notes, located, modifiedBy, lastUpdated, namedPersons) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'System', now() $11)
  `;

  const insertNewPublisher = `INSERT INTO vain.publisher ( publisher, publisherlocation, publisherfull) VALUES ($1, $2, $3);`;

  const insertNewPublisherBook = `INSERT INTO vain.publisher_book ( publisher_id, book_id) VALUES ($1, $2);`;

  const insertNewAuthor = `INSERT INTO vain.namedPersons ( name, lifeYears) VALUES ($1, $2);`;

  const insertNewAuthorBook = `INSERT INTO vain.author_book ( author_id, book_id) VALUES ($1, $2);`;

  const insertNewSubjectBook = `INSERT INTO vain.subject_book ( book_id, subject_id) VALUES ($1, $2);`;

  const insertNewTypeBook = `INSERT INTO vain.type_book ( book_id, type_id) VALUES ($1, $2);`;

// Getters

const getPublisherFromBook = `SELECT distinct publisher FROM book;`;


const getPublisherWithBookIDFromBook = `SELECT book_id, publisher FROM vain.book;`;

const getPublisherWithPublisherIDFromPublisher = `SELECT publisher_id, publisherfull FROM vain.publisher;`;

                            
const getAuthorFromBook = `SELECT distinct author FROM vain.book;`; 

const getAuthorWithBookIDFromBook = `SELECT book_id, author FROM vain.book;`;

const getAuthorWithAuthorIDFromAuthor = `SELECT author_id, name, lifeYears FROM vain.namedPersons;`;

const getTypeWithBookIDFromBook = `SELECT book_id, type FROM vain.book;`;

const getSubjectWithBookIDFromBook = `SELECT book_id, subject FROM vain.book;`;

const scrubTables = `ALTER TABLE public.book DROP COLUMN author, DROP COLUMN type, DROP COLUMN subject, DROP COLUMN publisher;  ALTER TABLE vain.publisher DROP COLUMN publisherfull`



module.exports = {createDB, insertBook, getPublisherFromBook, insertNewPublisher, getPublisherWithBookIDFromBook, getPublisherWithPublisherIDFromPublisher, insertNewPublisherBook,
    getAuthorFromBook, getAuthorWithBookIDFromBook, getAuthorWithAuthorIDFromAuthor, insertNewAuthor, insertNewAuthorBook,CheckifDBExists,
    getTypeWithBookIDFromBook, insertNewTypeBook,getSubjectWithBookIDFromBook,insertNewSubjectBook, scrubTables};
