import React from 'react';

const Book = ({ title, namedpersons, description }) => (
	<div className="book">
		<img src="https://i.ibb.co/QchWZGQ/book-cover.jpg" alt={title} />
		<div className="book-info">
			<h3>{title}</h3>
		</div>
		<div className="book-over">
			<h2>{namedpersons}</h2>
			<p>{description}</p>
		</div>
	</div>
);

export default Book;
