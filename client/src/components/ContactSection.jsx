import React from 'react'

const ContactSection = () => {
    return (
        <div className='section-8'>
            <div className="container p-5">
                <h2 className="text-center text-secondary fw-bold py-3">Contact Us</h2>

                <form className="px-5">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control rounded-0" placeholder="Name"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control rounded-0" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <input type="text" className="form-control rounded-0" placeholder="Phone" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control rounded-0" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea name="" id="" cols="30" rows="7" className="form-control rounded-0" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-around mt-5">
                        <div className="col-2">
                            <button type="submit" className="btn btn-1">
                                Send now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection
