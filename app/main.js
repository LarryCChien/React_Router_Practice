import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router, Route,
} from 'react-router';
// hashHistory 在 react-router v4.0.0 後移至 react-router-dom 中，並改為 HashRouter 。
import HashRouter from 'react-router-dom';
import Header from './components/header/header';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Home from './components/home/home';
import Products from './components/products/products';

ReactDOM.render(
    <Router history={HashRouter}>
        <Route exact path="/" component={Header}>
            {/* home預設為首頁 */}
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/contacts" component={Contacts} />
            {/* <Route path="/repos/:name" component={Repos} /> */}
        </Route>
    </Router>,
    document.getElementById('content'),
);
