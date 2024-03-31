# SQL from our Apps

## Initialize project

- initialize the package `npm init -y`
- create a .gitignore file to avoid adding node_modules!
- install node postgres package `pg`
- https://node-postgres.com/

- install pg: `npm install pg`
- create a file `index.js`

- first thing is we import (require) `pg`
- then decide how we want to connect to our database
- two choices:  Client or Pool
- https://node-postgres.com/features/connecting
- Clients are a single connection
- Pools are several connections. More as needed
- With a Client you have to `connect`.
- Pool is auto-connecting, but has more overhead
- With Web Apps you will usually use Pools, so we will here
- They are used identically

- The most common way to Create a Pool/Client is with a Config object
- Config contains: host, port, user, database, password.
- default values in config
- Or can use a single `connectionString` : contains all those.

- demo create Client & create Pool using `new` (Class)
- Once we have created our Pool or Client we can use it
- we use the `query()` method to perform operations
- create a query to fetch all the users
- returns a promise:  `data` object . we use `data.rows`

- notice we get back an array of object. pg translates the table for us
- also, the program does not terminate.
- with a client, it waits forever, with a pool about 10 seconds
- we can use `end()` to close the connection. Never in a Web App!!