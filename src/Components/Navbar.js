import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>
                <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "#000" }}
                >Form Craft
                </Link>
            </h1>
            <ul className='menu'>
                <li className='menu-item'>About Me</li>
                <li className='menu-item'>LinkedIn</li>
                <li className='menu-item'>Github Link</li>
            </ul>
        </div>
    )
}

export default Navbar