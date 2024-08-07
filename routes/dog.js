const express = require('express');
const request = require('request');
var router = express.Router();

router.get('/', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        } else {
            res.status(500).json({ error: 'Failed to fetch dog image' });
        }
    });
});

module.exports = router;