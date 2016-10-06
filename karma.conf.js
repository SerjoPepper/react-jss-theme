module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/index.js'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    webpack: { //kind of a copy of your webpack config
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
          }, {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      }
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}