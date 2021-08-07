import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header>
        <h1>Rakernius</h1>
        <div className="nav-links">
            <NavLink to="/top" activeClassName="active">
                Top Stories
            </NavLink>
            <NavLink to="/new" activeClassName="active">
                News
            </NavLink>
            <NavLink to="/best" activeClassName="active">
                Best Stories
            </NavLink>
        </div>
    </header>
);

export default Header;