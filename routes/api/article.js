const axios = require("axios");
const router = require("express").Router();

const apiKey = 'ec888836cb114c39b0c0fe6ecc738058';

const queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey + "&q=";

router.get('/call', (req, res) => {
    axios
        .get(queryURLBase + req.query.q)
        .then(results => res.json(results.data.response.docs))
        .catch(error => console.log(req.json(error)));
});

module.exports = router;
