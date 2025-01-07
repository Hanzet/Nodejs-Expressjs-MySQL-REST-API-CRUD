CREATE DATABASE IF NOT EXIST companydb;

USE companydb;

CREATE TABLE IF NOT EXISTS employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) NOT NULL,
    -- address VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Para eliminar la columna address de la tabla employee, puedes usar el comando ALTER TABLE con la opción DROP COLUMN.

ALTER TABLE employee
DROP COLUMN address; */

/* Para agregar una columna address a la tabla employee, puedes usar el comando ALTER TABLE con la opción ADD COLUMN.

ALTER TABLE employee ADD updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP; */

INSERT INTO employee VALUES
    (1, 'Jonathan', 50000, '2021-01-01 00:00:00'),
    (2, 'Karen', 60000, '2021-01-01 00:00:00'),
    (3, 'Michael', 70000, '2021-01-01 00:00:00'),
    (4, 'Oscar', 80000, '2021-01-01 00:00:00'),
    (5, 'Angela', 90000, '2021-01-01 00:00:00');