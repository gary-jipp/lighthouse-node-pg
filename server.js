require("dotenv").config();

const express = require('express');
const pg = require("pg");
const morgan = require('morgan');

const config = {
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
};
const pool = new pg.Pool(config);

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));

app.get("/api/users", (req, res) => {
  pool.query('select * from users order by id')
    .then(data => {
      res.json(data.rows);
    });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
