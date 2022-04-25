# Testing the Application 

There are two main ways to test this application. The first one is to test the routes and I used **postman** to do that. Simply follow the instructions in the `readme` file to start the *express server*. Once the server is running you can test the following routes in postman -

- *Gets a list of all books* `http://localhost:5000/api/books/`

- *Gets a list of all books of type Autobiography*`http://localhost:5000/api/books/type?type=Autobiography`

- *Gets a list of all books of subject Adventure*`http://localhost:5000/api/books/subject?subject=Adventure`

- *Gets a list of all books by a particular Publisher*`http://localhost:5000/api/books/publisher?publisher=London: Printed by J. Haddon`

- *Gets a list of all books by a Author Publisher*`http://localhost:5000/api/books/author?author=Downing, James`


# Testing Framework Jest
Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

Jest will look for test files with any of the following popular naming conventions:

Files with .js suffix in __tests__ folders.
Files with .test.js suffix.
Files with .spec.js suffix.
The .test.js / .spec.js files (or the __tests__ folders) can be located at any depth under the src top level folder.

Due to the time crunch I did not write extensive component based tests however if I were to write them they would replicate the learn react format shown below 

*Here's an example of using react-testing-library and jest-dom for testing that the <App /> component renders "Learn React".*

```javascript

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Vain Database')).toBeInTheDocument();
});


```