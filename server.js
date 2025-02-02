const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Inspection App Running!');
});

module.exports = app; // Export instead of running app.listen()
