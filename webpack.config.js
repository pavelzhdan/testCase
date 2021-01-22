const path = require('path');

module.exports = {
    mode: "development",
    entry: [ "@babel/polyfill", "./src/script.js"],
    output: {
        path:path.resolve(__dirname, "public"), // string (default)
        filename: "bundle.js", // string (default)
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
}