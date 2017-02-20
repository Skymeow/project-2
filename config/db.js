const pgp = require('pg-promise')();

const localconnection = 'postgres://localhost:5432/moviesgallery';

const db = pgp(localconnection);

module.exports = db;
