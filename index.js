const args = process.argv.slice(2);
const method = args[0];
if (!method) {
  return console.log("No method provided");
}

const id = args[1];

const queries = {
  "all": "select * from users",
  "show": `select * from users where id=${id}`,
};

const sql = queries[method];
console.log(sql);
if (!sql) {
  return console.log("Invalid method");
}

const pg = require("pg");
const config = {
  host: "localhost",   // default: localhost
  port: 5432,          // default: 5432 (optional)
  user: "labber",      //default:  username
  database: "midterm", // default: username
  password: "labber",
};

// Can also use a connection string
const connectionString = "postgres://labber:labber@localhost/midterm";

// What happens if we don't provide a config
// const client = new pg.Client(config);
// const client = new pg.Client(config);

// Client requires a connect first. no timeout
// client.connect();
// client.query("select * from users")
//   .then(data => {
//     console.log(data.rows);
//     client.end()
//   });

// Can't put this here!
// client.end()


const pool = new pg.Pool(config);
// const pool = new pg.Pool({connectionString});

// No "connect()" needed for a pool - auto-connect & timeout
pool.query("select * from users");

pool.query(sql)
  .then(data => {
    console.log(data.rows);  // We  care about rows. array
    // console.log(data);    // node pg object. Note: `_` items, don't touch/use
    pool.end();
  });