drop database if exists small_town_library;
create database small_town_library;
use small_town_library;

create table small_town_library.users_tbl (
  u_id int primary key auto_increment,
  u_login varchar(255) not null unique,
  u_passwordhash varchar(255) not null
) default charset = 'utf8';
