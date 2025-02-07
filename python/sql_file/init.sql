SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS attraction;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS critique;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);


CREATE TABLE critique (
    critique_id INT AUTO_INCREMENT,
    PRIMARY KEY (critique_id),
    attraction_id INT NOT NULL,
    FOREIGN KEY (attraction_id) REFERENCES attraction(attraction_id),
    critique VARCHAR(255) NOT NULL,
    note INT NOT NULL CHECK (note BETWEEN 0 AND 20),
    prenom VARCHAR(255),
    nom VARCHAR(255),
    anonyme BOOLEAN DEFAULT FALSE,
    
    CONSTRAINT check_nom_prenom CHECK (
        (anonyme = TRUE) OR (prenom IS NOT NULL AND nom IS NOT NULL)
    )
);

