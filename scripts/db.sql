CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT;

    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES
    ('task1', 'some description1'),
    ('task2', 'some description2'),
    ('task3', 'some description3'),
    ('task4', 'some description4'),
    ('task5', 'some description5');
    