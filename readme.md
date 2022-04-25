	💡 Clone/ Zip the Github repository to get access to all the file 

## How To Create and Populate the Database

In order to successfully run this application, you will need to download Postgres and run a few commands to configure the database. 

#### Create The Database 

In the folder, the file `books.sql` is responsible for creating the database. Run the file through *psql* or a program of your choice. 

#### Populate the Database 

Once the database is configured and tables have been created, run the command 

`node processData.js ` to populate the database with the data from the tsv/csv file


## Starting the Server 

After populating the Database you will need to start the `express` server on a separate port than the application (I recommend port 5000)

In order to start the server, run the command `node server.js`

### Starting the Main Application 


In order to start the application change the directory to `vain` 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

