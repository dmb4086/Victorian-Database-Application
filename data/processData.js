const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const pool = require('./connection.js');

/**
 * This method is responsible for reading the csv file and returning the data in a list of objects with the following structure:
 * {
 *
 * @param filename
 */
function readCSV(filename) {
	fs.createReadStream('vain.csv')
		.pipe(csv({}))
		.on('data', (data) => results.push(data))
		.on('end', () => {
			// console.log(results);
			return cleanData(results);
		});
}

function cleanData(results) {
	results.forEach((book) => {
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

		// console.log(book);
	});
	return results;
}

// populate the db with the data from the csv file
function populateDB(results) {
	results.forEach((book) => {
		pool.query(
			'INSERT INTO book (type, authorship, subject, title, year, description, namedpersons, notes, located, modifiedby, lastupdated, publisher, author) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, "System", now(), $10, $11)',
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
			],
			(error, results) => {
				if (error) {
					throw error;
				}
				console.log('Book Added');
			}
		);
		pool.query(
			'INSERT INTO publisher (publisher, publisherlocation) VALUES ($1, $2)',
			[book.Publisher, book.PlaceOfPublication],
			(error, results) => {
				if (error) {
					throw error;
				}
				console.log('Publisher Added');
			}
		);

		pool.query(
			'INSERT INTO NamedPersons (name) VALUES ($1)',
			[book.Author],
			(error, results) => {
				if (error) {
					throw error;
				}
				console.log('Author Added Added');
			}
		);
	});
}
