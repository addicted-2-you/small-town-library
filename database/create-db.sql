drop database if exists small_town_library;
create database small_town_library;
use small_town_library;

create table small_town_library.authors (
  id int primary key auto_increment,
  name varchar(255) not null,
  surname varchar(255) default '',
  patronum varchar(255) default ''
) default charset = 'utf8';

insert into small_town_library.authors(id, name, patronum, surname) values(1, 'Фёдор', 'Михайлович', 'Достоевский');
insert into small_town_library.authors(id, name, patronum, surname) values(2, 'Лев', 'Николаевич', 'Толстой');
insert into small_town_library.authors(id, name, patronum, surname) values(3, 'Антон', 'Павлович', 'Чехов');

create table small_town_library.publishing_houses (
  id int primary key auto_increment,
  name varchar(255) not null
) default charset = 'utf8';

insert into small_town_library.publishing_houses(id, name) values(1, 'АСТ');
insert into small_town_library.publishing_houses(id, name) values(2, 'Бомбора');
insert into small_town_library.publishing_houses(id, name) values(3, 'Манн, Иванов и Фербер');
insert into small_town_library.publishing_houses(id, name) values(4, 'Альпина Нон-Фикшн');

create table small_town_library.books (
  id int primary key auto_increment,
  name varchar(255) not null,
  description varchar(255) default '',
  publishing_date date default '1991-01-01',
  author_id int not null,
  publisher_id int not null
) default charset = 'utf8';

insert into small_town_library.books(name, publishing_date, author_id, publisher_id) values('Вишнёвый сад', '1998-8-10', 3, 1);
insert into small_town_library.books(name, publishing_date, author_id, publisher_id) values('Вишнёвый сад', '1998-8-10', 3, 1);
insert into small_town_library.books(name, publishing_date, author_id, publisher_id) values('Вишнёвый сад', '1998-8-10', 3, 1);
insert into small_town_library.books(name, publishing_date, author_id, publisher_id) values('Вишнёвый сад', '1998-8-10', 3, 1);
insert into small_town_library.books(name, publishing_date, author_id, publisher_id) values('Вишнёвый сад', '1998-8-10', 3, 1);