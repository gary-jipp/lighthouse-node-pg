const express = require('express');
const pg = require("pg");
const morgan = require('morgan');

const config = {
  database: "mydb",
  user: "labber",
  password: "labber",
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

app.get("/api/users/:id", (req, res) => {

});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
