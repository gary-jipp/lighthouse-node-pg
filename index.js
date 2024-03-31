const pg = require("pg");
const args = process.argv.slice(2);

const config = {
  database: "mydb",
  user: "labber",
  password: "labber",
};

const pool = new pg.Pool(config);

const method = args[0];
switch (method) {

  case "all":
    pool.query('select * from users')
      .then(data => {
        console.log(data.rows);  // We  care about rows. array
        pool.end();
      });
    break;

  case "show":
    const id = args[1];
    pool.query(`select * from users where id=${id}`)
      .then(data => {
        console.log(data.rows[0]);  // only need 1st item
        pool.end();
      });
    break;

  default:
    console.log("No method provided");
    break;
}