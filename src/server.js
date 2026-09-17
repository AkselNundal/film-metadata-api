const express = require('express');
const app = express();
const PORT = 8000;

const movieRoutes = require('./routes/movieRoutes')

app.get('/', (req, res) => {
    res.json({
        title: 'welcome',
        genre: 'horror'
    });
});

app.use('/movies', movieRoutes);

// starting server
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});