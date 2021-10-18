import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import features from '../data/Features';

const FeatureSection = () => {
    return (
        <Wrapper>
            <div className="section-2">
                <div className="container py-5 px-5">
                    <h2 className="text-center text-white py-3">Our Features</h2>
                    <p className='text-center text-white mb-4 pb-3'>Dinny Green International School is nurtured in grace and truth, raising green, <br /> flourishing and successful children.</p>

                    <div className="inner-wrapper">
                    {
                        features.map((feature, i)=>(
                        <FeatureCard key={i} title={feature.title} text={feature.text} />

                        ))
                    }
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default FeatureSection

const Wrapper = styled.div`
    background: url("/images/dinny5_n 1.png") no-repeat;
    background-size: cover;
    background-position: center;
    /* height: 80vh; */
    background-color: #01270f;
    background-blend-mode: overlay;
`
