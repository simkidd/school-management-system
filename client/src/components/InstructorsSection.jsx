import React from 'react'
import { Link } from 'react-router-dom'

const InstructorsSection = () => {
    return (
        <div className="section-7">
            <div className="container p-5">
            <h2 className="text-center text-secondary fw-bold py-3">Our Instructors & Teachers</h2>
                <p className='text-center text-secondary mb-4 pb-3'>We have the best teachers and instructors that would be able to train your kids, making<br /> them Creative, God fearing, Respectful and Intelligent </p>

                <Link to='#' className='btn btn-1'>View all courses</Link>
            </div>
        </div>
    )
}

export default InstructorsSection
