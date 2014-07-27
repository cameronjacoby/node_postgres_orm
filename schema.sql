DROP DATABASE IF EXISTS social_app;

CREATE DATABASE social_app;

\c social_app

CREATE TABLE IF NOT EXISTS people (
  id serial primary key,
  firstname varchar(25),
  lastname varchar(25),
  message varchar(140),
  icon text,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);

INSERT INTO people (firstname, lastname, message, icon) VALUES ('Cameron', 'Jacoby', 'Hello, world!', 'http://static.businessinsider.com/image/52e92002ecad04b72499e8a0/image.jpg');

\d+ people
\q