import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="banner">
                <div className="container py-5 px-5">
                    <div className="row align-items-center py-5">
                        <div className="col-5">
                            <h1 className="fw-bold text-1 mb-3 ">Give Your Child A Chance To Be Unique</h1>
                            <p className="text-secondary mb-4 hero-text">Experts agree that a child's personality doesn't fully form <br /> until they are in elementary school <br />
                                <span>Sign in</span> to enroll your child
                            </p>

                            <div className="d-flex justify-content-start button-links">
                                    <Link to="#" className="btn btn-1 me-3 ">Sign Up</Link>
                                    <Link to="#" className="btn btn-2">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default HeroSection

const Wrapper = styled.div`
        height: 80vh;
    .banner{
        background: url('/images/thisisengineering.png') no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
    }
    .hero-text{
        font-size: 14px
    }
    .button-links{
        a{
            font-size: 14px;
            padding: 0.6rem 1.8rem;
        }
    }
`