const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist'
    // }
}