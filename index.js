const pg = require("pg");
const args = process.argv.slice(2);

const config = {
  database: "mydb",
  user: "labber",
  password: "labber",
};

const pool = new pg.Pool(config);

const method = args[0];
const id = args[1]; // may be undefined in some cases

switch (method) {

  case "all":
    pool.query('select * from users order by id')
      .then(data => {
        console.log(data.rows);  // We  care about rows. array
        pool.end();
      });
    break;

  case "show":
    pool.query('select * from users where id=$1', [id])
      .then(data => {
        console.log(data.rows[0]);  // only need 1st item
        pool.end();
      });

    break;
  case "edit":
    const name = args[2];
    const sql = 'update users set name=$1 where id=$2';
    pool.query(sql, [name, id])
      .then(data => {
        console.log(data.rows);  // only need 1st item
        pool.end();
      });
    break;

  default:
    console.log("No method provided");
    break;
}