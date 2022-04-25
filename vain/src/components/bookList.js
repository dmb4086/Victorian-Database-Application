import React from 'react';

const BookList = (props) => {
	return (
		<>
			{props.books.map((book, index) => (
				<div>
					<img
						src="https://i.ibb.co/QchWZGQ/book-cover.jpg"
						alt="book cover"
						width="200vw"
						height="250vh"
					></img>
				</div>
			))}
		</>
	);
};

export default BookList;
