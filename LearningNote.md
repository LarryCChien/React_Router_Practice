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
### 20181008  
IndexRoute 在 react-router v4.0.0 已經移除了。  
hashHistory 在 react-router v4.0.0 後移至 react-router-dom 中，並改為 HashRouter 。  
