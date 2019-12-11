const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;

const weatherAPI = require('../src/weatherAPI');
const getWeather = weatherAPI.getWeather;
const fetchMock = require('fetch-mock');


const global = require('../src/main');

describe("check drawWeather", (done) => {
    it("drawWeather should exec weatherTemplate", () => {
        fetchMock.mock('*', 200, { overwriteRoutes: true });

        global.drawWeather(getWeather, (weatherHTML) => {
            assert.equal(weatherHTML, "Moscow");
        }, (response) => {
            return response
        }, () => {
            assert.fail("unreachable");
        }, "Moscow");

        fetchMock.reset();
    });

    it("drawWeather should exec notFoundTemplate", () => {
        fetchMock.mock('*', 404, { overwriteRoutes: true });

        global.drawWeather(getWeather, (weatherHTML) => {
            assert.equal(weatherHTML, "Not Found")
        }, (response) => {
            assert.fail("unreachable");
        }, () => {
            return "Not Found"
        }, "Moscow");

        fetchMock.reset();
    })

});