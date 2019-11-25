function notFoundTemplate() {
    const weatherTemplate = doT.template(`
        <p>
        City not found
        </p>
        `.replace(/[\s\t\n]+/g, ' ')
    );
    return weatherTemplate()
}

function weatherTemplate(weather) {
    const weatherTemplate = doT.template(`
        <p>
            {{? it.name }}
            City: {{=it.name}}, {{=it.sys.country}}
            <br>
            {{?}}
            
            {{? it && it.main && it.main.temp }}
            Temperature: {{=it.main.temp}}°
            <br>
            {{?}}
            
            {{? it && it.clouds && it.clouds.all }}
            Clouds: {{=it.clouds.all}}%
            <br>
            {{?}}
            
            {{? it && it.wind && it.wind.speed }}
            Wind speed: {{=it.wind.speed}}m/s
            <br>
            {{?}}
            
            {{? it && it.visibility }}
            Visibility: {{=it.visibility}}m
            <br>
            {{?}}  
        </p>
        `.replace(/[\s\t\n]+/g, ' ')
    );
    return weatherTemplate(weather)
}

if (typeof module !== 'undefined') {
    module.exports = {notFoundTemplate, weatherTemplate};
}