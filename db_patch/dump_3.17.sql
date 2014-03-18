# create DB
create database contacts;
use contacts;

# create contact table
create table contact(
id int NOT NULL auto_increment primary key,
fname varchar(100),
lname varchar(100),
phone varchar(20)
);

#insert contacts
INSERT INTO contact(fname, lname, phone) values('James', 'Butt','504-621-8927');
INSERT INTO contact(fname, lname, phone) values('Josephine', 'Darakjy','810-292-9388');
INSERT INTO contact(fname, lname, phone) values('Art', 'Venere','856-636-8749'); 