CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    email VARCHAR,
    password VARCHAR

);

CREATE TABLE accounts(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    reference VARCHAR NOT NULL UNIQUE,
    owner_id INTEGER,
    account_name VARCHAR,
    poc VARCHAR,
    contact_info VARCHAR
);

CREATE TABLE orders(
    reference VARCHAR NOT NULL PRIMARY KEY UNIQUE,
    owner_id INTEGER,
    account_id INTEGER,
    ship_to VARCHAR,
    ship_date DATE,
    status VARCHAR
);

CREATE TABLE todo(
    id SERIAL NOT NULL PRIMARY KEY UNIQUE,
    reference VARCHAR NOT NULL UNIQUE,
    owner_id INTEGER,
    account_name VARCHAR,
    content VARCHAR
);
