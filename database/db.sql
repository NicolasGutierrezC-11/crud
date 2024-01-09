-- crear base de base de datos
CREATE DATABASE crud;

-- utilizando la base de datos
use crud;

-- crear la tabla
CREATE TABLE comprador (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- para mostrar todas las tablas
show tables;

-- para describir la tabla
describe comprador;

-- para saber si tiene datos    
select * from comprador;

-- your_current_password
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';
