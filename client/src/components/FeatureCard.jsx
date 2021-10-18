import React from 'react'

const FeatureCard = ({title, text}) => {
    return (
        <div className="card">
        <div className="container px-4 ">
            <div className="img-wrapper"></div>
            <div className="card-body">
                <h5 className="card-title text-1">
                    {title}
                </h5>
                <p className="card-text text-secondary">
                    {text}
                </p>
            </div>

        </div>
        </div>
    )
}

export default FeatureCard
