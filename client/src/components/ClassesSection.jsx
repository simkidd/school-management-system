import React from 'react'
import { Link } from 'react-router-dom'

const ClassesSection = () => {
    return (
        <div className="section-4">
            <div className="container py-5 px-5">
                <h2 className="text-center text-secondary fw-bold py-3">Popular Classes</h2>
                <p className='text-center text-secondary mb-4 pb-3'>We have built hospitals, arranged doctor appointments have the diagnose and treat <br /> your Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <Link to='#' className='btn btn-1'>View all courses</Link>
            </div>
        </div>
    )
}

export default ClassesSection
