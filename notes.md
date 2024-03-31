# SQL from our Apps

- Today we will complete the cycle of "full stack development"
- We have Developed FE apps and BE apps
- Now we will learn to write database applications

- Lets create a new database and add some seed data
- we can use a program `psql` to talk to postgres
- Important to know that `psql` is NOT postgres.
- `psql` is just a client program.
- postgres is a database engine (RDBMS) : server
- not to be confused with ROUS's :)

- So we can use psql to create our database and add data
- If start psql with no parameters it assumes current user as database
- `psql: error: FATAL:  database "labber" does not exist`
- you may have seen this already. Use `template1` database (always there)
- `psql template1`
- create a new `mydb` database, import schema and seeds: `users` table

- we can also use psql to interact with the database: select, insert, etc
- our first task wil be to create our own CLI postgres client programs
