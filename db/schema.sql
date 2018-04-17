DROP DATABASE IF EXISTS fec;
CREATE DATABASE fec;

\c fec;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  firstname VARCHAR,
  lastname VARCHAR,
  imageUrl VARCHAR
);

CREATE TABLE listings (
  ID SERIAL PRIMARY KEY,
  overall FLOAT,
  accuracy INT,
  communication INT,
  cleanliness INT,
  location INT,
  checkin INT,
  value INT
);

CREATE TABLE reviews (
  ID SERIAL PRIMARY KEY,
  user_id INT,
  listing_id INT,
  body TEXT,
  accuracy INT,
  communication INT,
  cleanliness INT,
  location INT,
  checkin INT,
  value INT,
  overall FLOAT
);