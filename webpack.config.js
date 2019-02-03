const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');
const fs = require('fs');
const configJSON = require('./config.json');
console.log(configJSON);

module.exports = {
    entry : './src/js/index.js',
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    target:'web',
    mode: 'development',
    watch: true,
    module:{
        rules:[{
            test:/\.(png|jpg)$/,
            use:['file-loader']
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.html$/,
            use:['html-loader']
        }
        ]
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase : './dist'
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/main.html',
             minify:{removeComments: true}
        }),
        new CleanWebpackPlugin(
            ['dist']
        ),
       
    ]

};  