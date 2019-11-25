const weather = {
    "coord": {"lon": 27.56, "lat": 53.9},
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n"}],
    "base": "stations",
    "main": {"temp": -3, "pressure": 1022, "humidity": 68, "temp_min": -3, "temp_max": -3},
    "visibility": 10000,
    "wind": {"speed": 3, "deg": 120, "gust": 6},
    "clouds": {"all": 75},
    "dt": 1574693362,
    "sys": {"type": 1, "id": 8939, "country": "BY", "sunrise": 1574661268, "sunset": 1574690348},
    "timezone": 10800,
    "id": 625144,
    "name": "Minsk",
    "cod": 200
};

if (typeof module !== 'undefined') {
    module.exports = {weather};
}