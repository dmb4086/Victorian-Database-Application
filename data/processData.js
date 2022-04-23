const csv = require('csv-parser');
const fs = require('fs');
const results = [];

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
		let publishedLocaton = book.Publisher.substr(0, book.Publisher.indexOf(':'));
		if (publishedLocaton !== '' ){
			book.PlaceOfPublication =  publishedLocaton;
		}

		// year stuff
		if(book.Year.endsWith('?')){
			book.notes = "".concat("Year is a Scholarly Guess ")
			book.Year = book.Year.replace('?','');
		}
		if(book.Year === 'np'){
			book.Year = 4040;
			book.notes = "".concat("Book was never Published ")
		}

		console.log(book)

	});
	// console.log(results)
}

readCSV();
