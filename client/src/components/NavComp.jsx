import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = () => {
    return (
        <nav className="navbar bg-green">
            <div className="container px-5">
                <div className="navbar-brand">
                    <img src="/images/Group_60.png" alt="" />
                </div>

                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/" activeClassName="nav-link active" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Instructors</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle">Courses</NavLink>
                        <div className="dropdown-menu">
                            <NavLink to="#" className="dropdown-item">Option 1</NavLink>
                            <NavLink to="#" className="dropdown-item">Option 2</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link btn-1">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavComp