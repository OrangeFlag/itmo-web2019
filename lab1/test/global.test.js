const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;
const expect = require('chai').expect

const weatherAPI = require('../src/weatherAPI');
const getWeather = weatherAPI.getWeather;
const fetchMock = require('fetch-mock');


const global = require('../src/main');

describe("check drawWeather", () => {

    it("drawWeather should exec weatherTemplate", (done) => {
        fetchMock.get('begin:https://api.openweathermap.org/data/2.5/weather', (res) => {
            return {town: res.match(/&q=(.*?)&/)[1]}
        });

        global.drawWeather(getWeather, (weatherHTML) => {
            if (weatherHTML["town"] !== "Moscow") {
                done(new Error(`"${weatherHTML["town"]}" != "Moscow"`));
            } else {
                done()
            }
        }, (response) => {
            return response
        }, () => {
            done(new Error("unreachable"));
        }, "Moscow");
    });

    it("drawWeather should exec notFoundTemplate", (done) => {
        fetchMock.get('begin:https://api.openweathermap.org/data/2.5/weather', 404);

        global.drawWeather(getWeather, (weatherHTML) => {
            if (weatherHTML !== "Not Found") {
                done(new Error(`${weatherHTML} !== "Not Found"`));
            } else {
                done()
            }
        }, () => {
            done(new Error("unreachable"));
        }, () => {
            return "Not Found"
        }, "Moscow");
    });


    it("getWeather should return object", (done) => {
        fetchMock.get('begin:https://api.openweathermap.org/data/2.5/weather', (res) => {
            return {town: res.match(/&q=(.*?)&/)[1]}
        });

        getWeather("Moscow").then(response => {
            expect(response).to.be.deep.equal({town: "Moscow"})
            done()
        }).catch(err => {
            done(new Error("getWeather throw exception"))
        })
    });

    it("getWeather should throw error on not 200", (done) => {
        fetchMock.get('begin:https://api.openweathermap.org/data/2.5/weather', 404);


        getWeather("Moscow").then(response => {
            done(new Error("getWeather should throw exception on not 200 response status"))
        }).catch(err => {
            expect(err.message).to.be.equal("Not 200 response");
            done()
        });
    });

    afterEach(function () {
        fetchMock.restore();
    });

});