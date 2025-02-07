INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Silver Star', 'Montagne russe', 3, 1);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Montagne 8', 'Montagne russe', 4, 1);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Blue Fire', 'Montagne russe', 4, 0);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Grand splash', 'Attraction sur eau', 1, 0);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Voltron', 'Montagne russe', 5, 1);

INSERT INTO users (name, password) VALUES ('toto', 'toto');

INSERT INTO critique (attraction_id, critique, note, prenom, nom, anonyme)
VALUES 
    (1, 'Une expérience incroyable ! Sensations fortes garanties.', 18, 'Lucas', 'Dupont', FALSE),
    (1, 'Trop rapide à mon goût, mais bien pour les amateurs de vitesse.', 14, NULL, NULL, TRUE),

    (2, 'J’ai adoré ! Un vrai défi pour les amateurs de sensations.', 19, 'Camille', 'Morel', FALSE),
    (2, 'Un peu trop violent pour moi, mais sinon sympa.', 12, NULL, NULL, TRUE),

    (3, 'Décevant, je m’attendais à plus de sensations.', 10, 'Julien', 'Bernard', FALSE),
    (3, 'Bonne attraction mais un peu courte.', 15, NULL, NULL, TRUE),

    (4, 'Très rafraîchissant par temps chaud, super agréable !', 17, 'Emma', 'Lefevre', FALSE),
    (4, 'Pas assez de vagues à mon goût, trop tranquille.', 11, NULL, NULL, TRUE),

    (5, 'Une des meilleures attractions du parc ! Incroyable !', 20, 'Mathis', 'Rousseau', FALSE),
    (5, 'Grosse montée d’adrénaline, j’ai adoré !', 19, NULL, NULL, TRUE);
