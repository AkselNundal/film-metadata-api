const express = require('express');
const app = express();
const PORT = 3000;

const movieRoutes = require('./routes/movieRoutes')

app.get('/', (req, res) => {
    res.send('Welcome horror fans!');
});

app.use('/movies', movieRoutes);

// starting server
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});