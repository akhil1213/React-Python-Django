import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h3>Image here</h3>
        <ul className="nav-links">
            <li><Link to ="/">About</Link></li>
            <li><Link to ="/signup">Sign up</Link></li>
            <li>Log In</li>
            <li>User Profile</li>
        </ul>
    </nav>
  );
}

export default Nav;
