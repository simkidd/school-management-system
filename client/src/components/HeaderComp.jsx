import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComp = () => {
    return (
        <header className="bg-white">
            <div className="container px-5">
                <div className="row align-items-center">
                    <div className="col-8 ">
                        <ul className="nav ">
                            <li className="nav-item me-4"><span className="fw-bold">Call:</span> +234 9012624162</li>
                            <li><span className="fw-bold">Support:</span> info@yourcompany.com</li>
                        </ul>
                        
                    </div>
                    <div className="col-4">
                        <ul className="nav justify-content-end align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link me-2">Log in</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/" className="nav-link btn-1 py-1 px-4">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header> 
    )
}

export default HeaderComp
