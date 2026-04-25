const path = require('path');

module.exports = {
    entry : './script.js' , 
    output : {
        filename : 'bundle.js' , 
        path : path.resolve(__dirname , 'dist') , 
        assetModuleFilename : "asset/[hash][ext]",
        clean : true
    } , 
    module : {
        rules : [
            {
                test : /.(avif|webp|jpg|jpeg|png)$/ , 
                type : "asset/resource"
            },
            {
                test : /\.(css)$/,
                use : ["style-loader" , "css-loader"]
            },
            {
                test : /\.(scss)$/,
                use :  ["style-loader" , "css-loader" , "sass-loader"]
            },
            {
                test : /.(ttf|woff|woff2|eot|otf)$/,
                type : "asset/resource"
            }
        ]
    }
}