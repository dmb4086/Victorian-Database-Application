const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const pool = require('./connection.js');

/**
 * This method is responsible for reading the csv file and returning the data in a list of
 * objects
 *
 *
 *
 */
function readCSV() {
	fs.createReadStream(__dirname + '/vain.csv')
		.pipe(csv({}))
		.on('data', (data) => results.push(data))
		.on('end', () => {
			// console.log(results);
			return cleanData(results);
		});
}

function cleanData(results) {
	var bar = new Promise((resolve, reject) => {
		results.forEach((book, index, array) => {
			// Publisher Stuff
			let publishedLocaton = book.Publisher.substr(
				0,
				book.Publisher.indexOf(':')
			);
			if (publishedLocaton !== '') {
				book.PlaceOfPublication = publishedLocaton;
			}
	
			// year stuff
			if (book.Year.endsWith('?')) {
				book.notes = ''.concat('Year is a Scholarly Guess ');
				book.Year = book.Year.replace('?', '');
			}
			if (book.Year === 'np') {
				book.Year = 4040;
				book.notes = ''.concat('Book was never Published ');
			}
			if (book.Year === '') {
				book.Year = 4040;
				book.notes = ''.concat('Book Year not known ');
			}
	
			//type stuff
			if (book.Type === '') {
				book.Type = 'U';
			}
			//subject stuff
			if (book.Subject === '') {
				book.Subject = 'U';
			}
	
			// author stuff
			book.NamedPersons = book.Author;
			
			// book type
			if(book.Type.length > 2) {
				book.Type = 'U'
			}

			// book type
			if(book.Author.length > 2) {
				book.Author = 'N'
			}

			// book type
			if(book.Subject.length > 2) {
				book.Subject = 'U'
			}
	
			// console.log(book);

			if (index === array.length -1) resolve();
		});
	});
	
	bar.then(() => {
		console.log('cleanData done!');
		populateDB(results)
	});
}

// populate the db with the data from the csv file
async function populateDB(results) {
	try {
		for (let i=0; i<results.length; i++) {
			const book = results[i];
			let result = null;

			result = await pool.query(
				"INSERT INTO book (type, authorship, subject, title, year, description, namedpersons, notes, located, modifiedby, lastupdated, publisher, author) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'System', now(), $10, $11) RETURNING book_id",
				[
					book.Type,
					book.Authorship,
					book.Subject,
					book.Title,
					book.Year,
					book.Descriptor,
					book.NamedPersons,
					book.Notes,
					book.Located, 
					book.Publisher,
					book.Author
				]
			);

			const bookId = result.rows[0].book_id;

			result = await pool.query(
				'INSERT INTO publisher (publisher, publisherlocation) VALUES ($1, $2) RETURNING publisher_id',
				[ book.Publisher, book.PlaceOfPublication ],
			);

			const publisherId = result.rows[0].publisher_id;
			
			await pool.query(
				"INSERT INTO publisher_book(publisher_id, book_id) VALUES ($1, $2)",
				[bookId, publisherId]
			);

			result = await pool.query(
				'INSERT INTO namedpersons (name) VALUES ($1) RETURNING author_id',
				[book.Author]
			);

			const authorId = result.rows[0].author_id;

			await pool.query(
				"INSERT INTO author_book(author_id, book_id) VALUES ($1, $2)",
				[authorId, bookId]
			);

			await pool.query(
				"INSERT INTO type_book(type_id, book_id) VALUES ($1, $2)",
				[book.Type, bookId]
			);

			// NOT WORKING IDK WHY
			// await pool.query(
			// 	"INSERT INTO subject_book(subject_id, book_id) VALUES ($1, $2)",
			// 	[book.Subject, bookId]
			// );
		}

		console.log('VAIN DATABASE POPULATED!')
	} catch (error) {
		console.log(error.stack)
		console.log(`POPULATE DB ERROR: ${error}`)
	}
}

function main() {
	readCSV();
}

main();
