const redis = require('./utils/redis');
const getWeatherByTown = require('./utils/getWeatherByTown.js').getWeatherByTown;
const parseWeatherApiResponse = require('./utils/parseWeatherApiResponse.js').parseWeatherApiResponse;
const getWeatherByCoord = require('./utils/getWeatherByCoord').getWeatherByCoord;
const express = require('express');
const path = require('path');


const app = express();


app.use(express.static('dist'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.get('/weather/town', (req, res) => {
    getWeatherByTown(req.query.q).then((response) => {
        res.status(200).send(response)
    }).catch((err) => {
        console.log(err);
        res.status(500).send()
    });
});

app.get('/weather/coord', (req, res) => {
    getWeatherByCoord(req.query.lat, req.query.long).then((response) => {
        res.status(200).send(response)
    }).catch((err) => {
        console.log(err);
        res.status(500).send()
    });

});

app.get('/favourites', (req, res) => {
    redis.getFavorites().then((response) => {
        res.status(200).send(response)
    }).catch((err) => {
        console.log(err);
        res.status(500).send()
    });
});

app.post('/favourites', (req, res) => {
    redis.addFavorites(req.query.q).then(() => {
        res.status(200).send();
    }).catch((err) => {
        console.log(err);
        res.status(500).send();
    })
});

app.delete('/favourites', (req, res) => {
    redis.deleteFromFavorites(req.query.q).then(
        () => res.status(200).send()
    ).catch((err) => {
        console.log(err);
        res.status(500).send();
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});