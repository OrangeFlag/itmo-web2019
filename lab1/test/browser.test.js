describe('browser tests', function () {

    before(function (done) {
        karmaHTML.index.open();

        //karmaHTML.index.onstatechange fires when the Document is loaded
        //now the tests can be executed on the DOM
        karmaHTML.index.onstatechange = function (ready) {
            //if the #Document is ready, fire tests
            //the done() callback is the jasmine native async-support function
            if (ready) done();
        };
    });

    it('on submit should call drawWeather with correct input value', () => {
        var _document = karmaHTML.index.document;
        var _window = window.frames[0];


        var city = "Moscow";

        _document.getElementById("city-form").city.value = city;


        var inputTown = "";
        var drawWeather = _window.drawWeather;
        _window.drawWeather = function (getWeather, attachWeather, weatherTemplate, notFoundTemplate, city) {
            inputTown = city;
        };

        var evt = new CustomEvent("submit", {"bubbles": true, "cancelable": true});
        _document.getElementById("city-form").dispatchEvent(evt);

        //restore
        _window.drawWeather = drawWeather;

        expect(inputTown).to.be.equal(city);
    });

    it('on submit should not reload page', () => {
        var _document = karmaHTML.index.document;
        var _window = window.frames[0];


        var drawWeather = _window.drawWeather;
        _window.drawWeather = function (getWeather, attachWeather, weatherTemplate, notFoundTemplate, city) {
        };

        var evt = new CustomEvent("submit", {"bubbles": true, "cancelable": true});
        _document.getElementById("city-form").dispatchEvent(evt);

        //restore
        _window.drawWeather = drawWeather;

        expect(performance.navigation.type).not.to.be.equal(performance.navigation.TYPE_RELOAD)
    });


    it('drawWeather should attach result to weather', () => {
        var _document = karmaHTML.index.document;
        var _window = window.frames[0];

        _window.attachWeather("<div> Test </div>");

        expect(_document.getElementById("weather").innerHTML).to.be.equal("<div> Test </div>");
    });
});

