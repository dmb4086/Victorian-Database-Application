import React from 'react';

const BookList = (props) => {
	return (
		<>
			{props.books.map((book, index) => (
				<div>
					<img src="images/book_cover.jpg" alt="book cover"></img>
				</div>
			))}
		</>
	);
};

export default BookList;
