const express = require('express');
const payload = require('../data/movies.json')
const router = express.Router();

router.get('/', (req, res) => {
    res.json(payload);
});

module.exports = router;