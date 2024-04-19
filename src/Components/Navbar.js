import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>
                <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "#000" }}
                >
                    FormTheBuilder
                </Link>
            </h1>
            <ul className='menu'>
                <li className='menu-item'>
                    <Link
                        to={"/about"}
                        style={{ textDecoration: "none", color: "#000" }}
                    >
                        About Project
                    </Link>
                </li>
                <li className='menu-item'>
                    <a href='https://www.linkedin.com/in/gauravjhacode/' target='blank'>LinkedIn</a>
                </li>
                <li className='menu-item'>
                    <a href='https://github.com/thegauravjha/Random-Form-Generator' target='blank'>Github Link</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar