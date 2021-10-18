import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <div className="section-3">
            <div className="container py-5 px-5">
                <div className="row">
                    <div className="col-5">
                        <div className="container ps-4 py-4">
                            <h2 className="text-1">Find Out More About Our Learning Experience</h2>
                            <p className="text-secondary">We have built hospitals, arranged doctor appointments have the diagnose and treat your Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            
                                <li><span><i className="fas fa-check-circle text-1"></i></span> Culture in diversity</li>
                                <li><span><i className="fas fa-check-circle text-1"></i></span> We have built hospitals, arranged doctor.</li>
                                <li><span><i className="fas fa-check-circle text-1"></i></span> We have built hospitals, arranged doctor.</li>
                            
                            <Link to="#" className="btn btn-1 mt-3">
                                Learn more
                            </Link>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="cont">
                            <img src="/images/Mask Group (1).png" alt="" className="mask" />
                            <img src="/images/dinny6_n.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
