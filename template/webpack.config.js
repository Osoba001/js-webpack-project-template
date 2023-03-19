const path=require('path')

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname,'dist/assets'),
        filename: 'bundle.js'
    },
    // devServer:{
    //     contentBase: path.resolve(__dirname,'dist'),
    //     publicPath: '/assets/'
    // },
    devServer: {
        static: path.join(__dirname, 'dist'),
        devMiddleware: {
          publicPath: '/dist/'
        }
        // ,
        // port: 3000,
        // hot: "only"
      },
      module:{
        rules: [
            {
            test:/\.js$/,
            exclude: /node_module/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        }
    ]
      }

}