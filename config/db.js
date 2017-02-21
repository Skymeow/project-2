const pgp = require('pg-promise')();

const localconnection = process.env.database_url || 'postgres://localhost:5432/moviesgallery';

const db = pgp(localconnection);

module.exports = db;
