var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
       index:'./component/js/index.js',
    },
    output:{
       // filename:'[name]-[hash].js',
         filename:'js/[name].js',
        path:path.resolve(__dirname,''),
    },
     module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader?limit=8192&name=images/[hash:8].[name].[ext]',
          
         ],
         
         
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
        use: [
           'xml-loader'
         ]
       },
       {  
        test: /\.scss$/,  
         use:'sass-loader' 
        }  
     ]
   },
   //已经生成的页面可以注释这一块，要不然的话webpack就会把index.html这个页面重新生成，就会删除了所有的内容，如下面两个页面about.html和contact.html页面，你书写任何内容webpack之后都被重新生成
   plugins:[
     /* new HtmlWebpackPlugin({
        filename:'comments.html',
        template:'./component/index.html',
        chunks:['ab']
      }),
      /*new HtmlWebpackPlugin({
        filename:'contact.html',
        template:'./component/index.html',
        chunks:['cd']
      }),
       new HtmlWebpackPlugin({    
        filename:'index.html',
        template:'./component/index.html',
        chunks:['index']
      })*/
    ]
}