import React from 'react';
import './App.css'
import { Link
 } from 'react-router-dom';

const Nav=()=>{
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add products</Link></li>
                <li><Link to="/update">Update products</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    )

}

export default Nav;
