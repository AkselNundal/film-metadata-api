const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        movie_title: 'Halloween returns',
        release_year: 1994,
        runtime_minutes: 89,
        genre: 'slasher' 
    })
});

module.exports = router;