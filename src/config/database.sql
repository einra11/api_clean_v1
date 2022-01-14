CREATE DATABASE book_api;


CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    rating int,
    serial VARCHAR(255)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255),
    status VARCHAR(255)
);