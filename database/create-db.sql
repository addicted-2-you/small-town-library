drop database if exists library;
create database library;
use library;

drop table if exists library.authors;
create table library.authors (
  id int primary key auto_increment,
  name varchar(255) not null,
  surname varchar(255) default '',
  patronum varchar(255) default ''
) default charset = 'utf8';

insert into library.authors(id, name, patronum, surname) values(1, 'Фёдор', 'Михайлович', 'Достоевский');
insert into library.authors(id, name, patronum, surname) values(2, 'Лев', 'Николаевич', 'Толстой');
insert into library.authors(id, name, patronum, surname) values(3, 'Антон', 'Павлович', 'Чехов');

drop table if exists library.books;
create table library.books (
  id int primary key auto_increment,
  name varchar(255) not null,
  description varchar(255) default '',
  publishing_date date default '1991-01-01'
) default charset = 'utf8';

insert into library.books(name, publishing_date) values('Вишнёвый сад', '1998-8-10');
insert into library.books(name, publishing_date) values('Вишнёвый сад', '1998-8-10');
insert into library.books(name, publishing_date) values('Вишнёвый сад', '1998-8-10');
insert into library.books(name, publishing_date) values('Вишнёвый сад', '1998-8-10');
insert into library.books(name, publishing_date) values('Вишнёвый сад', '1998-8-10');
