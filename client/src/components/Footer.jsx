import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <footer className="text-white">
            <div className="container pt-5 pb-1">
                <div className="row py-5">
                    <div className="col py-5">col 1</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                </div>
                <hr />
                <div className="row justify-content-around">
                    <div className="col-5">
                    <div className="container">
                        <span>&copy;2021 Dinny Green International. Designed by <span> <Link to='/' className='text-white-50'>John Mason</Link></span></span>

                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
