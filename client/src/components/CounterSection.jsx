import React from 'react'
import { Link } from 'react-router-dom'

const CounterSection = () => {
    return (
        <div className="section-1">
            <div className="container py-5 px-5">
                <div className="row align-items-center ">
                    <div className="col py-5">
                        <div className="image-wrapper">
                            <img src="/images/Mask Group (1).png" alt="" className="mask" />
                            <img src="/images/MaskGroup.png" alt="" />
                    </div>
                    </div>
                    <div className="col py-5">
                        <div className="container text-1 py-5">
                            <h2>Advance Learning System Around The World</h2>
                            <p className="text-secondary col-10">We have made a collaborative effort in bringing together scientific expertise from other countries, steered jointly by their governments on the basis of shared, policy-driven interests.</p>
                            <div className="row">
                                <div className="col-3">
                                    <h2 >25k<sup>+</sup></h2>
                                    <p className="text-secondary">Teachers</p>
                                </div>
                                <div className="col-3">
                                    <h2>75k<sup>+</sup></h2>
                                    <p className="text-secondary">Active Courses</p>
                                </div>
                                <div className="col-3">
                                    <h2>250</h2>
                                    <p className="text-secondary">Extra Curricular</p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-1">
                                Learn more
                            </Link>
                            <img src="/images/Mask Group (2).png" alt="" className="mask" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection
