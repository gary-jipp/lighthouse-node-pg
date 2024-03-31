const pg = require("pg");
const args = process.argv.slice(2);

const config = {
  database: "mydb",
  user: "labber",
  password: "labber",
};

const pool = new pg.Pool(config);

const method = args[0];
const id = args[1]; 

switch (method) {

  case "all":
    pool.query('select * from users order by id')
      .then(data => {
        console.log(data.rows);  /
        pool.end();
      });
    break;

  case "show":
    pool.query('select * from users where id=$1', [id])
      .then(data => {
        console.log(data.rows[0]);
        pool.end();
      });

    break;

  case "edit":
    const updateName = args[2];
    const updateSql = 'update users set name=$1 where id=$2';
    pool.query(updateSql, [updateName, id])
      .then(data => {
        console.log(data.rows);
        pool.end();
      });
    break;

  default:
    console.log("No method provided");
    break;
}