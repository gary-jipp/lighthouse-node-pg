# SQL from our Apps

## Prepared Statements

- We would never write pg code using string templates for params
- This is vulnerable to SQL injection attacks

- example:  `node index.js "show 2;drop table users"`
- this destroys the users table
- SQL Injection attack. Most common attack
- Still many programs vulnerable to this
- list all users, reset passwords.  All sorts of mischief!
- How do we protect against this?  Prepared Statements
