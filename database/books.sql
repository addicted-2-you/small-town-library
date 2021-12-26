drop table if exists small_town_library.authors;
create table small_town_library.authors_tbl (
  a_id int primary key auto_increment,
  a_name varchar(255) not null,
  a_surname varchar(255) default '',
  a_patronum varchar(255) default ''
) default charset = 'utf8';

insert into small_town_library.authors_tbl(a_id, a_name, a_patronum, a_surname) values(1, 'Фёдор', 'Михайлович', 'Достоевский');
insert into small_town_library.authors_tbl(a_id, a_name, a_patronum, a_surname) values(2, 'Лев', 'Николаевич', 'Толстой');
insert into small_town_library.authors_tbl(a_id, a_name, a_patronum, a_surname) values(3, 'Антон', 'Павлович', 'Чехов');
insert into small_town_library.authors_tbl(a_id, a_name, a_patronum, a_surname) values(5, 'Howard', 'Lovecraft', '');

drop table if exists small_town_library.abstract_books_tbl;
create table small_town_library.abstract_books_tbl (
  ab_id int primary key auto_increment,
  ab_name varchar(255) not null
) default charset = 'utf8';

insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(1, 'Вишнёвый сад');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(2, 'Преступление и наказание');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(3, 'Братья Карамазовы');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(4, 'Игрок');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(5, 'Записки из подполья');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(6, 'Бесы');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(7, 'Война и мир');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(8, 'Человек в футляре');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(9, 'Униженные и оскорбленные');
insert into small_town_library.abstract_books_tbl(ab_id, ab_name) values(10, 'Записки из мертвого дома');

drop table if exists small_town_library.m2m_abstract_books_authors_tbl;
create table small_town_library.m2m_abstract_books_authors_tbl (
  m2maba_id int primary key auto_increment,
  m2maba_abstractbookid int not null,
  m2maba_authorid int not null,
  
  foreign key (m2maba_abstractbookid) references small_town_library.abstract_books_tbl (ab_id) on delete cascade,
  foreign key (m2maba_authorid) references small_town_library.authors_tbl (a_id) on delete cascade
);

insert into m2m_abstract_books_authors_tbl(m2maba_abstractbookid, m2maba_authorid) values (1, 3);

drop table if exists small_town_library.physical_books_tbl;
create table small_town_library.physical_books_tbl (
  pb_id int primary key auto_increment,
  pb_name varchar(255) not null,
  pb_publishingdate date default '1991-01-01'
) default charset = 'utf8';

insert into small_town_library.physical_books_tbl(pb_id, pb_name, pb_publishingdate) values(1, 'Вишнёвый сад', '1998-8-10');
insert into small_town_library.physical_books_tbl(pb_id, pb_name, pb_publishingdate) values(2, 'Вишнёвый сад', '1998-8-10');
insert into small_town_library.physical_books_tbl(pb_id, pb_name, pb_publishingdate) values(3, 'Вишнёвый сад', '1998-8-10');
insert into small_town_library.physical_books_tbl(pb_id, pb_name, pb_publishingdate) values(4, 'Вишнёвый сад', '1998-8-10');
insert into small_town_library.physical_books_tbl(pb_id, pb_name, pb_publishingdate) values(5, 'Вишнёвый сад', '1998-8-10');

drop table if exists small_town_library.m2m_abstract_books_physical_books_tbl;
create table small_town_library.m2m_abstract_books_physical_books_tbl (
  m2mabpb_id int primary key auto_increment,
  m2mabpb_abstractbookid int not null,
  m2mabpb_physicalbookid int not null,
  
  foreign key (m2mabpb_abstractbookid) references small_town_library.abstract_books_tbl (ab_id) on delete cascade,
  foreign key (m2mabpb_physicalbookid) references small_town_library.physical_books_tbl (pb_id) on delete cascade
) default charset = 'utf8';

insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(1, 1);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(1, 2);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(1, 3);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(1, 4);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(1, 5);
