CREATE DATABASE book_api;


CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    rating int
);