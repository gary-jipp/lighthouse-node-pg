const pg = require("pg");
const config = {
  host: "localhost",   // default: localhost
  port: 5432,          // default: 5432 (optional)
  user: "labber",      //default:  username
  database: "midterm", // default: username
  password: "labber",
};

const pool = new pg.Pool(config);

// What happens if we don't provide a config
// const client = new pg.Client(config);

const client = new pg.Client(config);

// Client requires a connect first. no timeout
client.connect();
client.query("select * from users")
  .then(data => {
    console.log(data.rows);
  });

// No "connect()" needed for a pool - auto-connect & timeout
pool.query("select * from users")
  .then(data => {
    console.log(data.rows);
  });