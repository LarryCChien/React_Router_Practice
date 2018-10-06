### 20181007  
跟其他React相關的專案不同，因為會有多個html檔，所以調整資料夾結構以及Webpack。  
調整部分如下：  
- 其他React專案：  
入口： `./index.html`  
``` javascript
const plugins = PRODUCTION ? [] : [new webpack.HotModuleReplacementPlugin()];
const config.devServer = {
    hot: true,
    contentBase: path.join(__dirname, ''),
    publicPath: '/build',
    stats: { colors: true },
};
```
- 本專案：  
入口： `./src/index.html`  
``` javascript
const plugins = PRODUCTION ? [] : [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    inject: 'body',
}), new webpack.HotModuleReplacementPlugin()];
const config.devServer = {
    hot: true,
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/build',
    stats: { colors: true },
};
```
