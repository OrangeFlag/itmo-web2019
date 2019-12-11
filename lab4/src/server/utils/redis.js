const redis = require('redis');
const client = redis.createClient();

async function addFavorites(favorites) {
    return client.sadd("favorites", favorites, (err, rep) => {
        console.log(err);
        console.log(rep);
    })
}

function getFavorites() {
    return new Promise(resolve => {
        client.smembers("favorites", (err, rep) => {
            console.log(err);
            console.log(rep);
            resolve(rep)
        });
    });
}

async function deleteFromFavorites(city) {
    client.srem("favorites", city, (err, rep) => {
        console.log(err);
        console.log(rep);
    })
}

exports.addFavorites = addFavorites;
exports.getFavorites = getFavorites;
exports.deleteFromFavorites = deleteFromFavorites;