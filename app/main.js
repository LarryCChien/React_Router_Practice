import React from 'react';
import ReactDOM from 'react-dom';
// hashHistory 在 react-router v4.0.0 後移至 react-router-dom 中，並改為 HashRouter 。
import {
    HashRouter as Router, Route,
} from 'react-router-dom';
import Header from './components/header/header';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Home from './components/home/home';
import Products from './components/products/products';

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// );
// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// );
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
