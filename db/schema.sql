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
  overall DECIMAL,
  accuracy DECIMAL,
  communication DECIMAL,
  cleanliness DECIMAL,
  location DECIMAL,
  value DECIMAL
);

CREATE TABLE reviews (
  ID SERIAL PRIMARY KEY,
  user_id INT,
  listing_id INT,
  body TEXT,
  accuracy INT,
  location INT,
  cleanliness INT,
  communication INT,
  value INT
);