import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ProductChild from './product_child';
import ProductChild2 from './product_child2';

const Products = () => (
    <Router basename="/products">
        <div>
            <ul>
                <li><Link to="/child">Product Child</Link></li>
                <li><Link to="/child2">Product Child2</Link></li>
            </ul>
            <Route path="/child" component={ProductChild} />
            <Route path="/child2" component={ProductChild2} />
        </div>
    </Router>
);
export default Products;
