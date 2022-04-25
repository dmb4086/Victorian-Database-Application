const router = require('express').Router();
const pool = require('../db');
router.get('/', async (req, res, next) => {
	try {
		const stmt = `SELECT * FROM book`;
		const results = await pool.query(stmt);

		res.send({ success: true, results: results.rows });
	} catch (error) {
		next(error);
	}
});

router.get('/subject', async (req, res, next) => {
	try {
		const { subject } = req.query;

		const stmt = `SELECT * 
        FROM book 
        INNER JOIN subject_book ON book.book_id = subject_book.book_id
        INNER JOIN subject ON subject_book.subject_id = subject.subject_id
        WHERE subject.subject = $1`;

		const results = await pool.query(stmt, [subject]);

		res.send({ success: true, results: results.rows });
	} catch (error) {
		next(error);
	}
});

router.get('/type', async (req, res, next) => {
	try {
		const { type } = req.query;

		const stmt = `SELECT * 
        FROM book 
        INNER JOIN type_book ON book.book_id = type_book.book_id
        INNER JOIN type ON type_book.type_id = type.type_id
        WHERE type.type = $1`;

		const results = await pool.query(stmt, [type]);

		res.send({ success: true, results: results.rows });
	} catch (error) {
		next(error);
	}
});

router.get('/author', async (req, res, next) => {
	try {
		const { author } = req.query;
		const stmt = `SELECT * 
        FROM book WHERE namedpersons = $1`;
		const results = await pool.query(stmt, [author]);

		res.send({ success: true, results: results.rows });
	} catch (error) {
		next(error);
	}
});

router.get('/publisher', async (req, res, next) => {
	try {
		const { publisher } = req.query;

		const stmt = `SELECT * 
        FROM book 
        INNER JOIN publisher_book ON book.book_id = publisher_book.book_id
        INNER JOIN publisher ON publisher_book.publisher_id = publisher.publisher_id
        WHERE publisher.publisher = $1`;

		const results = await pool.query(stmt, [publisher]);

		res.send({ success: true, results: results.rows });
	} catch (error) {
		next(error);
	}
});

router.get('/year', async (req, res, next) => {
	try {
		const { startYear, endYear } = req.query;

		const stmt = `SELECT * 
        FROM book 
        WHERE year BETWEEN $1 AND $2`;

		const results = await pool.query(stmt, [startYear, endYear]);

		res.send({ success: true, results: results.rows });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
