const express = require('express');
const app = express();
const port = 8080;

app.get('/home', (req, res) => {
    res.send('I love horror films!');
});

app.listen(port, () => {
    console.log(`listening on https://localhost:${port}`);
});