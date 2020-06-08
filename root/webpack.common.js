const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        sylvania87: './src/sylvania87.js',
        sylvania89: './src/sylvania89.js',
        lindfield: './src/lindfield.js',
        randwick: './src/randwick.js',
        northnarrabean: './src/northnarrabean.js',
        vaucluse: './src/vaucluse.js',
        gymeabay: './src/gymeabay.js',
    },
    plugins: [
        new CopyPlugin([
            { from: './src/images/', to: './images' }
          ])
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'css-loader',
                        'html-loader'
                    ]
            }
        ],
   },
output: {
    filename: '[name].js',
        path: path.resolve(__dirname, '../')
}
 };