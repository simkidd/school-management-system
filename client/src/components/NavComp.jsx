import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <nav className="navbar bg-green">
            <div className="container px-5">
                <div className="navbar-brand">
                <Link to='/'>
                    <img src="/images/Group_60.png" alt="" />
                </Link>
                </div>

                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Instructors</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle">Courses</Link>
                        <div className="dropdown-menu">
                            <Link to="#" className="dropdown-item">Option 1</Link>
                            <Link to="#" className="dropdown-item">Option 2</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link btn-1">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavComp