const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'scripts/app.js'),
    output : {
        path: __dirname,
        filename: 'bundle.js'
    }
}