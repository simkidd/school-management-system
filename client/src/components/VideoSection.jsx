import React from 'react'

const VideoSection = () => {
    return (
        <div className='section-5'>
            <div className="container py-5 px-5">
            <h2 className="text-center text-secondary fw-bold py-3">Find Out How We Help Students</h2>
                <p className='text-center text-secondary mb-4 pb-3'>Authentic 'voice and choice' matter and a big part of this leaving 'room for interpretation' in the assignment. Those gray areas <br /> can confuse students unacustomed to agency and choice, but once they become comfortable with it,itcan be a significant <br /> factor in helping them show what their 'best' actually is.</p>
                <div className="row justify-content-around">
                    <div className="col-9">
                        <div className="img-wrapper">
                            <img src="/images/dinnygreen_n 1.png" alt="" />
                            <div className="play-circle">
                                <i className="fas fa-play text-1 play-button"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection
