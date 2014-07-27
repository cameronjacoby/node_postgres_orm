DROP DATABASE IF EXISTS social_app;

CREATE DATABASE social_app;

\c social_app

CREATE TABLE IF NOT EXISTS people (
  id serial primary key,
  firstname varchar(25),
  lastname varchar(25),
  message varchar(140),
  created_at TIMESTAMP NOT NULL DEFAULT now()
);

INSERT INTO people (firstname, lastname, message) VALUES ('Cameron', 'Jacoby', 'Hello, world!');

\d+ people
\q