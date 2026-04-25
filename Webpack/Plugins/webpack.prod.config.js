const path = require('path');
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const glob = require('glob');
const {PurgeCSSPlugin} = require("purgecss-webpack-plugin");

const PATHS = {
    src : path.join(__dirname , "src")
};

module.exports = {
    mode : "production" , 
    entry : {
        index : "./src/index.js" , 
        explore : "./src/explore.js"
    } , 
    output : {
        filename : '[name].bundle.js' , 
        path : path.resolve(__dirname , 'dist') , 
        assetModuleFilename : "asset/[hash][ext]",
        clean : true
    } , 
    optimization :{
        minimizer : [
            `...` , 
            new CssMinimizerPlugin()
        ]
    } ,
    plugins : [
        new PurgeCSSPlugin({
            paths : glob.sync(`${PATHS.src}/**/*`, {nodir : true}),
            only : ["explore"] , 
            safelist : ["unused-css"]
        }) , 
        new MiniCssExtractPlugin(),
        new HtmlPlugin({
            template : "./src/index.html",
            chunks : ["index"],
            filename : "index.html",
            inject : "body"
        }) , 
        new HtmlPlugin({
            template : "./src/explore.html" , 
            chunks : ["explore"],
            filename : "explore.html",
            inject : "body"
        }) , 
        new CopyPlugin({
            patterns : [
                {
                    from : path.resolve(__dirname , "src/assets/images"),
                    to : path.resolve(__dirname , "dist" , "assets/images")
                }
            ]
        })
    ],
    module : {
        rules : [
            {
                test : /.(avif|webp|jpg|jpeg|png)$/ , 
                type : "asset/resource"
            },
            {
                test : /\.(css)$/,
                use : [MiniCssExtractPlugin.loader , "css-loader"]
            },
            {
                test : /\.(scss)$/,
                use :  [MiniCssExtractPlugin.loader , "css-loader" , "sass-loader"]
            },
            {
                test : /.(ttf|woff|woff2|eot|otf)$/,
                type : "asset/resource"
            }
        ]
    },
    devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    
  }
}