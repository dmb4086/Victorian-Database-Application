## How To Create and Populate the Database

In order to successfully run this application, you will need to download Postgres and run a few commands to configure the database. 

#### Create The Database 

In the folder, the file `books.sql` is responsible for creating the database. Run the file through *psql* or a program of your choice. 

#### Populate the Database 

Once the database is configured and tables have been created, run the command 

`node processData.js ` to populate the database with the data from the tsv/csv file