// Karma configuration
// Generated on Sat Dec 21 2019 13:40:22 GMT+0300 (Moscow Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '..',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],

        plugins: ['karma-chai', 'karma-mocha', 'karma-mocha-reporter', 'karma-firefox-launcher', 'karma-html'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'test/browser.test.js', watched: true, served: true, included: true},
            {pattern: 'src/*', watched: false, served: true, included: false},
            {pattern: 'node_modules/dot/doT.js', watched: false, served: true, included: false},
            {pattern: 'node_modules/less/dist/less.js', watched: false, served: true, included: false},
        ],

        // files: [
        //     // 'src/*',
        //     'test/browser.test.js'
        // ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'karmaHTML'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],

        client: {
            //If false, Karma will not remove iframes upon the completion of running the tests
            clearContext: false,
            //karma-html configuration
            karmaHTML: {
                source: [
                    //indicate 'index.html' file that will be loaded in the browser
                    //the 'index' tag will be used to get the access to the Document object of 'index.html'
                    {src: './src/index.html', tag: 'index'}
                ],
                auto: true
            }
        },


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
