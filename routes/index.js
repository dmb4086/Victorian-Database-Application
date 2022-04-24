const router = require('express').Router();

router.use('/books', require('./bookRoutes'));

module.exports = router;