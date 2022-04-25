import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BookList from './components/bookList';

function App() {
	const [books, setBook] = useState([
		{
			book_id: 1,
			type: 'A',
			authorship: 'N',
			subject: 'M',
			title:
				"A Narrative of the Life of James Downing [In verse], a Blind Man, Late a Private in His Majesty's 20th Regiment of the Foot, Containing Historical, Naval, Military, Moral, Religious and Entertaining Reflections. Composed by Himself in Easy Verse.",
			year: 1811,
			description:
				'1 vol and 143 pp; apparently real autobiography; republished in 1815 and 1817 in England and in 1821 in New York',
			namedpersons: 'Downing, James',
			notes: '',
			located: '',
			modifiedby: 'System',
			lastupdated: '2022-04-24T04:00:00.000Z',
			publisher: 'London: Printed by J. Haddon',
			author: 'N',
		},
		{
			book_id: 2,
			type: 'A',
			authorship: 'N',
			subject: 'R',
			title:
				'Some Account of the Life and Religious Experience of Mary Alexander, late of Needham Market [Written by Herself]',
			year: 1811,
			description:
				'1 vol of 210 pp; first published in 1811 (York: C. Peacock) and may have been privately printed (since it was "Printed by C. Peacock, for W. Alexander" in the first instance)',
			namedpersons: 'Alexander, Mary',
			notes: '',
			located: '',
			modifiedby: 'System',
			lastupdated: '2022-04-24T04:00:00.000Z',
			publisher: 'York: Printed for C. Peacock',
			author: 'N',
		},
		{
			book_id: 3,
			type: 'A',
			authorship: 'Y',
			subject: 'R',
			title:
				'The Retrospect, or Review of Providential Mercies; with Anecdotes of Various Characters, and an Address to Naval Officers',
			year: 1816,
			description: '1 vol; military and religious',
			namedpersons: 'Marks, Richard',
			notes: '',
			located: '',
			modifiedby: 'System',
			lastupdated: '2022-04-24T04:00:00.000Z',
			publisher: 'London: J. Nisbet',
			author: 'N',
		},
		{
			book_id: 4,
			type: 'U',
			authorship: '?',
			subject: '?',
			title: 'Journal',
			year: 1816,
			description: '1 vol; but can find no record of this in WC or BLIC',
			namedpersons: 'Brande, Thomas?',
			notes: '',
			located: '',
			modifiedby: 'System',
			lastupdated: '2022-04-24T04:00:00.000Z',
			publisher: 'London: John Murray',
			author: 'N',
		},
		{
			book_id: 5,
			type: 'B',
			authorship: 'N',
			subject: 'G',
			title: 'Life of Raffaello Sanzio da Urbino',
			year: 1816,
			description:
				'edition of 500 on half-profits, and only 477 sold; netted Murray and author each 8.9.2',
			namedpersons: 'Duppa, Richard',
			notes: '',
			located: '',
			modifiedby: 'System',
			lastupdated: '2022-04-24T04:00:00.000Z',
			publisher: 'London: John Murray',
			author: 'N',
		},
	]);
	return (
		<div className="App">
			<BookList books={books} />
		</div>
	);
}

export default App;
