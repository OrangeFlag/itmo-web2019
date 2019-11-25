const assert = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

global.doT = require('dot');

const template = require('../src/template');

const weatherMock = {...require('./weather').weather};

let weather = {};

describe('Template check', () => {
    beforeEach(() => {
        weather = {...weatherMock}
    });

    it('should return "City not found"', () => {
        template.notFoundTemplate().should.equal(" <p> City not found </p> ")
    });

    it('should return weather in the city', () => {
        template.weatherTemplate(weather).should.equal(' <p>  City: Minsk, BY <br>   Temperature: -3° <br>   Clouds: 75% <br>   Wind speed: 3m/s <br>   Visibility: 10000m <br>  </p> ')
    });

    it('should return weather in the city without Temperature', () => {
        delete weather.main;
        template.weatherTemplate(weather).should.equal(' <p>  City: Minsk, BY <br>    Clouds: 75% <br>   Wind speed: 3m/s <br>   Visibility: 10000m <br>  </p> ')
    });

    it('should return weather in the city without Clouds', () => {
        delete weather.clouds;
        template.weatherTemplate(weather).should.equal(' <p>  City: Minsk, BY <br>   Temperature: -3° <br>    Wind speed: 3m/s <br>   Visibility: 10000m <br>  </p> ')
    });

    it('should return weather in the city without wind', () => {
        delete weather.wind;
        template.weatherTemplate(weather).should.equal(' <p>  City: Minsk, BY <br>   Temperature: -3° <br>   Clouds: 75% <br>    Visibility: 10000m <br>  </p> ')
    });

    it('should return weather in the city without visibility', () => {
        delete weather.visibility;
        template.weatherTemplate(weather).should.equal(' <p>  City: Minsk, BY <br>   Temperature: -3° <br>   Clouds: 75% <br>   Wind speed: 3m/s <br>   </p> ')
    });
});