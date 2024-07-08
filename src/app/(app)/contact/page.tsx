import { Mail, Person, Phone, Place } from '@mui/icons-material'
import React from 'react'

function Contact() {
    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/display-flex.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
                    <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                        Contact
                    </h1>

                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-md-6 animate-fade-in-up"
                            style={{
                                animationDelay: '0.1s',
                                visibility: 'visible',
                            }}>
                            <h6 className="text-textPrimary text-uppercase">
                                Get In Touch
                            </h6>
                            <h1>Headquarter</h1>
                            <div className="mb-2 d-flex align-items-center">
                                <Person fontSize="medium" className="mr-2" />
                                Ajay Mundada
                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <Phone fontSize="medium" className="mr-2" />
                                +91 989 099 3201
                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <Mail fontSize="medium" className="mr-2" />
                                info@nivaecotech.com
                            </div>
                            <div className="mb-2">
                                <Place fontSize="medium" className=" mr-2" />
                                16/6 Pinnac Apartment, Ground Floor, Vakil
                                Nagar, Erandwane, Pune, Maharashtra, India,
                                411004
                            </div>
                            <iframe
                                className="position-relative w-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.4787884290569!2d73.82804487941385!3d18.499025950913175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfeddba2db29%3A0x18df71f0e665f5fd!2sPinnac%20Apartment!5e0!3m2!1sen!2sin!4v1693224969540!5m2!1sen!2sin"
                                style={{ height: '300px', border: '0' }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                                title="Google Map"></iframe>
                        </div>
                        <div
                            className="col-md-6 animate-fade-in-up"
                            style={{
                                animationDelay: '0.1s',
                                visibility: 'visible',
                            }}>
                            <div className="bg-light rounded-xl p-5 h-100 d-flex align-items-center">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                                <label htmlFor="name">
                                                    Your Name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    autoComplete="email"
                                                />
                                                <label htmlFor="email">
                                                    Your Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                                <label htmlFor="subject">
                                                    Subject
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{
                                                        height: '150px',
                                                    }}></textarea>
                                                <label htmlFor="message">
                                                    Message
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 ">
                                            <button
                                                className="bg-theme1-light hover:bg-theme1-dark rounded text-white w-100 py-3"
                                                type="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
