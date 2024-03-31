const pg = require("pg");
const args = process.args.slice(2)

const config = {
  user: "labber",      //default:  username
  database: "midterm", // default: username
  password: "labber",
};

const pool = new pg.Pool(config);
// const pool = new pg.Pool({connectionString});

pool.query("select * from users")
  .then(data => {
    console.log(data.rows);
    pool.end();
  });