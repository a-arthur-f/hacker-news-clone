import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header>
        <Link to="/top/1"><h1>Rakernius</h1></Link>
        <div className="nav-links">
            <NavLink to="/top/1" activeClassName="active">
                Top Stories
            </NavLink>
            <NavLink to="/new/1" activeClassName="active">
                News
            </NavLink>
            <NavLink to="/best/1" activeClassName="active">
                Best Stories
            </NavLink>
        </div>
    </header>
);

export default Header;