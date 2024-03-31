# SQL from our Apps

## Initialize project

- Now we have a prorgam that will fetch all records
- lets add more functionality: Fetch a single record
- we will need to specify the function on the command line
- we can use `process.argv`
- several ways to do this.  We will use a `switch`
- add `all` and `show` for two functions
- handle missing parameters gracefully
- With `show` we only need a single record. use rows[0]

- We would never write pg code this way! Its very Insecure