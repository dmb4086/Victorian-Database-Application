import logo from './logo.svg';
import './App.css';
import Book from './components/Book';
import { useEffect, useState } from 'react';

const BOOKS_API = 'http://localhost:3000/api/books';

const SEARCH_AUTHOR_API = 'http://localhost:3000/api/books/author?author=';

function App() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch(BOOKS_API)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setBooks(data.results);
				onchange = { handleOnChange };
			});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		fetch(SEARCH_AUTHOR_API + searchTerm)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setBooks(data.results);
				onchange = { handleOnChange };
			});
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};
	return (
		<div>
			<header>
				<form onSubmit={handleOnSubmit}>
					<input
						className="search"
						type="text"
						placeholder="Search by author"
						value={searchTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>

			<div className="book-container">
				{books.map((book) => (
					<Book key={book.book_id} {...book} />
				))}
			</div>
		</div>
	);
}

export default App;
