# SQL from our Apps

## Express App

- install express and morgan as usual
- lets install `nodemon` as dev dep also to save restarts
- create a `server.js` for our express app
- add a `start` script to our `package.json`
- start and test.  We get "not found" = working!

- add some stub endpoints.  Just the GET's for today to keep it simple
- we will add the config and pool to our Express App
- add the query to our `get` route
- very important.  no `pool.end` !!

- we can return json. This is very common and its called an "API"
- one important convention.  If the endpoint returns json, its `/api/<something>`
- this is a convention you should follow!  `/api` = json.  Not `/api` = content