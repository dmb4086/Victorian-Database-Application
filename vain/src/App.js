import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/bookList';
import BookListHeading from './components/BookListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';

function App() {
	const [books, setBook] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	// make the API call to get all books
	const getBookRequest = async (searchValue) => {
		const url = `http://localhost:3000/api/books/author?author=${searchValue}`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const responseJson = await response.json();

		console.log(responseJson);
		// set the books state

		if (responseJson.Search) {
			setBook(responseJson.results);
		}
		setBook(responseJson.results);
	};

	useEffect(() => {
		getBookRequest(searchValue);
	}, [searchValue]);
	return (
		<div className="container-fluid book-app">
			<div className="row d-flex align-items-center mt-4 mb-4">
				<BookListHeading heading="Search Results" />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>

			<div className="row">
				<BookList books={books} favouriteCompnent={AddFavourites} />
			</div>
		</div>
	);
}

export default App;
