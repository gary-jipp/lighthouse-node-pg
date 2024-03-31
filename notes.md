# SQL from our Apps

## secrets - Environment variables

- we wouldn't want to hard code usernames and passwords into our app
- anyone could see them in GitHub if the code was public
- These are called "secrets" and they should be secret
- to do this we use environment variables
- they are variables in the OS (eg: linux)
- for example:   use the `env` command in linux
- in node REPL:  `process.env`  whill show this
- we can use the environment in our app
- they are set using linux `export` or in the startup files
- can also be set temporarily:   `A_NEW_VAL=123 node`

- example:  PORT can be a variable with a default
- `PORT=8001 npm start`
- we can do the same with host, username & password, etc
- but difficult to type all these on the command line
- instead we can use a package: `dotenv`
- makes this easy

- install dotenv
- create an `.env` file & add secrets.  Add to .gitignore!!
- `require("dotenv").config();`  as 1st line
- remove secrets from code and replace with env variables
- create a `.env.example` file for github with no secrets 
