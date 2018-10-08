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
BrowserRouter 跟 HashRouter 的選擇，如果在 Server 端有 render 頁面的工作則使用 BrowserRouter ，  
以此專案的開發環境為例，如果用 BrowserRouter ，接著點選任一連結後按重新整理，  
則頁面會出現 `cannot GET /URL` 的錯誤。  
如果要修正此錯誤，則需調整 webpack 的設定，可參考[React-router “Cannot GET /*” except for root url](https://stackoverflow.com/questions/32098076/react-router-cannot-get-except-for-root-url)  
HashRouter 則是用 `#` 作為錨點，先載入 # 前的資料，接著再透過 # 後的資訊判斷要呈現哪些資料。
由於現在的目標是學習製作 SPA 的網頁，因此用 HashRouter 較符合需求。

如果要用 import 的方式把其他檔案放在 Router 中，則在該檔案的也要用 `<Route></Route>` 將 React 的元素包起來。  
註：如果用 `<Router></Router>` 包起來的話，在 `main.js` 裡點選連結是不會切換頁面的。  
如下：  
`main.js`  
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router, Route,
} from 'react-router-dom';
import Header from './components/header/header';
ReactDOM.render(
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/products" component={Products} />
        </div>
    </Router>,
    document.getElementById('content'),
);
```
**header.js 正確版：**  
`header.js`  
``` javascript
import React from 'react';
import { Route, Link } from 'react-router-dom';
// 每頁都要載入的表頭
const Header = () => (
    <Route>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    </Route>
);
export default Header;

```

**header.js 會報錯版：**  
`header.js`  
``` javascript
import React from 'react';
import Link from 'react-router-dom';
// 每頁都要載入的表頭
const Header = () => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/products">Products</Link></li>
    </ul>
);
export default Header;
```
