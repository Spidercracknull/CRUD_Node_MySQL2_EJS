-- to create a new database
CREATE DATABASE alumnos;

-- to use database
use alumnos;

-- creating a new table
CREATE TABLE alumnos (
  boleta INT NOT NULL PRIMARY KEY,
  nombre VARCHAR(20) NOT NULL,
  appaterno VARCHAR(20) NOT NULL,
  telefono BIGINT(10) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe alumnos;