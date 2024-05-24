create database project_event;

create table guru (
    id varchar(30) primary key not null,
    name varchar(60) not null,
    username varchar(20) not null,
    password varchar(20) not null,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
);

create table category (
    name varchar(30) not null primary key,
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp on update current_timestamp
);

CREATE TABLE event (
    id VARCHAR(30) PRIMARY KEY NOT NULL,
    guru_id VARCHAR(30) NOT NULL,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(100) NOT NULL,
    category VARCHAR(30) NOT NULL,
    event_date DATETIME NOT NULL,
    location VARCHAR(60) NOT NULL,
    max_participant INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    email VARCHAR(35) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (guru_id) REFERENCES guru(id),
    FOREIGN KEY (category) REFERENCES category(name)
);


ALTER TABLE guru
MODIFY COLUMN password VARCHAR(100);


Diagram db
//https://dbdiagram.io/d/664c24a0f84ecd1d22b44ac8
