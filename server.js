const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
	console.log(`*****SERVER ERROR: ${error}`);
	res.status(500).send({ success: false, error });
});

app.get('/', (req, res) => {
	res.send('<h1>Welcome to the Books API</h1>');
});

app.use('/api', require('./routes'));

const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`Server started on port: ${port}\nhttp://localhost:3000`)
);
