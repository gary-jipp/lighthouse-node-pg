# SQL from our Apps

## Add & Delete Row

- We are getting the hand of this now.   Lets "add" a record
- new switch case for "add"
- need the name and email address from args.
- Notice no `id` needed so we read [1] and [2] from args
- use a `insert into` sql statement

- deleting a row is the easiest.  All we need is the ID
- `delete from table`. a `where` is critical here now

- `returning` also works with add inserts, deletes

- if we delete a row and add another.  What `id` will it get?
- it never re-uses id's.  Never backfill auto incrementing numbers

- we can even `create` tables using pg.
- can we create a database?  yes!
- notice, we cannot use $ 

- What we have done is created an "abstraction layer" around SQL
- we have simplified access to the database. No sql knowledge needed