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
