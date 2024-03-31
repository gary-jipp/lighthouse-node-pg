# SQL from our Apps

## Update Row

- We have created 2 functions:  browse (all) and read (show)
- lets create an "edit" function
- need the `id` and a new `name` for a user
- need a new `case` for `edit`
- move the `id` outside the `switch`
- get `name` from args

- `update` syntax for SQL. Always have a `where`
- $1 and $2 order is not important, as long as they match the array
- can also create an `sql` string
- run our edit with "Bobby" for a name and log `result.rows`
- `result.rows` comes back empty.  Its ALWAYS an array
- updates generally do not return data.
- but no error (no catch), so that means it was sucessful
- notice the order changes.  There is no intrinsic order to records
- can add `order by id` to ensure an order


