const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index1.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        
    },
    devtool: 'cheap-source-map'
}