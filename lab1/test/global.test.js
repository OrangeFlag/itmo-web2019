const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;


const global = require('../src/global');

const getWeather = async (city) => {
    return city
};

const getWeatherThrowError = async (city) => {
    throw new Error("goodest error")
};

describe("check drawWeather", (done) => {
    it("drawWeather should exec weatherTemplate", () => {
        global.drawWeather(getWeather, (weatherHTML) => {
            assert.equal(weatherHTML, "Moscow")
        }, (response) => {
            return response
        }, () => {
            assert.fail("unreachable");
            done()
        }, "Moscow")
    });

    it("drawWeather should exec notFoundTemplate", () => {
        global.drawWeather(getWeatherThrowError, (weatherHTML) => {
            assert.equal(weatherHTML, "Not Found")
        }, (response) => {
            assert.fail("unreachable");
        }, () => {
            return "Not Found"
        }, "Moscow")
    })

});