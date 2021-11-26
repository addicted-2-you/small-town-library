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

drop table if exists small_town_library.abstract_books_tbl;
create table small_town_library.abstract_books_tbl (
  ab_id int primary key auto_increment,
  ab_name varchar(255) not null,
  ab_description varchar(255) default '',
  ab_authorid int not null
) default charset = 'utf8';

insert into small_town_library.abstract_books_tbl(ab_id, ab_name, ab_authorid) values(1, 'Вишнёвый сад', 3);

drop table if exists small_town_library.physical_books_tbl;
create table small_town_library.physical_books_tbl (
  pb_id int primary key auto_increment,
  pb_name varchar(255) not null,
  pb_description varchar(255) default '',
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
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(2, 1);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(3, 1);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(4, 1);
insert into small_town_library.m2m_abstract_books_physical_books_tbl(m2mabpb_abstractbookid, m2mabpb_physicalbookid) values(5, 1);
