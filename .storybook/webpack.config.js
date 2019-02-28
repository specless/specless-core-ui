const path = require('path');
const variables = require('../src/variables.js');

module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.
    defaultConfig.module.rules.push({
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
    });

    defaultConfig.module.rules.push({
        test: /\.less$/,
        loaders: [
            "style-loader",
            "css-loader",
            {
                loader: "less-loader",
                options: {
                    modifyVars: variables,
                    javascriptEnabled : true
                }
            }
        ]
    });

    return defaultConfig;
};