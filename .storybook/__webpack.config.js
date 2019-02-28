const path = require("path");
const theme = require('../src/variables.js');

module.exports = {
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/,
                options: {
                    presets: ["@babel/react"],
                    plugins: [
                        ['import', {libraryName: "antd", style: true}],
                        ["transform-class-properties", {"spec": true}]
                    ]
                },
            },
            {
                test: /\.(jpeg|jpg|png|woff|woff2|eot|ttf|svg)$/,
                loaders: ['file-loader'],
                include: path.resolve(__dirname, '../')
            }
        ]
    }
};