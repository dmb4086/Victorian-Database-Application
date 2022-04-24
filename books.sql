DROP DATABASE IF EXISTS public;

CREATE DATABASE public;

\c public;

DROP TABLE IF EXISTS public.user;
CREATE TABLE public.user (
 user_id varchar(45) NOT NULL,
  fName varchar(45) NOT NULL,
  lName varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  password varchar(200) NOT NULL,
  role int NOT NULL,
  PRIMARY KEY (user_id)) ;
INSERT INTO public.user VALUES ('System','System','System','NA','sha1$d840d588$1$e624595497fc366db0822ad8f271298d584f9e67', 1);
DROP TABLE IF EXISTS public.role;
CREATE TABLE public.role (
  role_id SERIAL NOT NULL,
  role varchar(20) NOT NULL,
  PRIMARY KEY (role_id)
);
 INSERT INTO public.role(role) VALUES ('Administrator'),('Contributor'),('User'),('Guest');
DROP TABLE IF EXISTS public.subject;
CREATE TABLE public.subject (
  subject varchar(45) DEFAULT NULL,
  subject_id varchar(2) NOT NULL,
  PRIMARY KEY (subject_id)
);
DROP TABLE IF EXISTS public.type;
CREATE TABLE public.type (
  type_id varchar(2) NOT NULL,
  type varchar(45) DEFAULT NULL,
  PRIMARY KEY (type_id)
);
DROP TABLE IF EXISTS public.book;
CREATE TABLE public.book (
  book_id serial NOT NULL,
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
  author text,
  PRIMARY KEY (book_id),
  
  CONSTRAINT fk_user FOREIGN KEY (modifiedBy) REFERENCES public.user (user_id)
);
DROP TABLE IF EXISTS public.publisher;
CREATE TABLE public.publisher (
  publisher_id serial NOT NULL ,
  publisher varchar(200) DEFAULT NULL,
  publisherLocation varchar(200) DEFAULT NULL,
publisherfull varchar(200) DEFAULT NULL,
  PRIMARY KEY (publisher_id)
) ;
DROP TABLE IF EXISTS  public.namedPersons;
CREATE TABLE  public.namedPersons (
  author_id SERIAL NOT NULL,
  name varchar(200) DEFAULT NULL,
  lifeYears varchar(20) DEFAULT NULL,
  PRIMARY KEY (author_id)
) ;
DROP TABLE IF EXISTS public.publisher_book;
CREATE TABLE public.publisher_book (
  publisher_id int NOT NULL,
  book_id int NOT NULL,
  PRIMARY KEY (publisher_id,book_id),
  CONSTRAINT fk_publisher_book_id FOREIGN KEY (book_id) REFERENCES public.book (book_id) ON DELETE CASCADE,
  CONSTRAINT fk_publisher_id FOREIGN KEY (publisher_id) REFERENCES public.publisher (publisher_id)
);
DROP TABLE IF EXISTS public.author_book;
CREATE TABLE public.author_book (
  author_id int NOT NULL,
  book_id int NOT NULL,
  PRIMARY KEY (author_id,book_id),
  CONSTRAINT fk_author_book_id FOREIGN KEY (book_id) REFERENCES public.book (book_id) ON DELETE CASCADE,
  CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES public.namedPersons (author_id));
  
DROP TABLE IF EXISTS public.type_book;
CREATE TABLE public.type_book (
  type_id varchar(2) NOT NULL,
  book_id int NOT NULL,
  PRIMARY KEY (type_id,book_id),
  CONSTRAINT fk_type_book_id FOREIGN KEY (book_id) REFERENCES public.book (book_id) ON DELETE CASCADE,
  CONSTRAINT fk_type_id FOREIGN KEY (type_id) REFERENCES public.type (type_id));
  DROP TABLE IF EXISTS public.subject_book;
CREATE TABLE public.subject_book (
  subject_id varchar(2) NOT NULL,
  book_id int NOT NULL,
  PRIMARY KEY (subject_id,book_id),
  CONSTRAINT fk_subject_book_id FOREIGN KEY (book_id) REFERENCES public.book (book_id) ON DELETE CASCADE,
  CONSTRAINT fk_subject_id FOREIGN KEY (subject_id) REFERENCES public.subject (subject_id));
INSERT INTO public.type VALUES ('A','Autobiography'),('B','Biography'),('C','Compilation'),('D','Diary/Journal'),('F','Fictional'),('G','Broadside'),('L','Letters'),('U','Unknown');
INSERT INTO public.subject VALUES ('Adventure','A'),('Criminal','C'),('Domestic','D'),('Great Man','G'),('Historical','H'),('Literary','L'),('Military','M'),('Politics','P'),('Religious','R'),('Satire','S'),('Travel','T'),('Celebrity','CY'),('Middle-class, MC','MC'),('Social Critique','SC'),('School Days','SD'),('Theatre','TH'),('Unknown','U');
;