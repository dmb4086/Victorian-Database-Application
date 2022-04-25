import React from 'react';

const BookList = (props) => {
	const favouriteCompnent = props.favouriteCompnent;
	return (
		<>
			{props.books.map((book, index) => (
				<div className="image-container d-flex justify-content-start m-3">
					<img
						src="https://i.ibb.co/QchWZGQ/book-cover.jpg"
						alt="book cover"
						width="200vw"
						height="250vh"
					></img>
					<div className="overlay d-flex align-items-center justify-content">
						<favouriteCompnent title={book.title} />
					</div>
				</div>
			))}
		</>
	);
};

export default BookList;
