# SQL from our Apps

## Parameterized Queries

- We would never write pg code using string templates for params
- This is vulnerable to SQL injection attacks

- example:  `node index.js show "2;drop table users"`
- this destroys the users table
- SQL Injection attack. Most common attack
- Still many programs vulnerable to this
- list all users, reset passwords.  All sorts of mischief!
- How do we protect against this? "Parameterized Queries"
- not to be confused with "Prepared Statements" which is something very different

- instead of using template literals, we pass the variables as an array
- 2nd parameter to `query()`
- and use placeholders for them in the query: $1, $2 (note: not $0)
- this looks a little like EJS templateVars
- this guarantees a String variable is always used as a String and not parsed as SQL
- now the attack fails

- pool and client queries also accept a query config object.
- allows more advanced scenarios such as Prepared Statements, Type Parsers, etc
- we won't get into these today

```JavaScript
const query = {
  text: 'INSERT INTO users(name, email) VALUES($1, $2)',
  values: ['brian', 'brian@gmail.com'],
}
```

- "Parameterized Queries" are not unique to Postgres.