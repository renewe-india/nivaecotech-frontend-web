'use client'

import axios from '@/lib/axios'
import { Mail, Person, Phone, Place } from '@mui/icons-material'
import React, { useState } from 'react'

interface ContactFormInput {
    name: string
    email: string
    phone: string
    service: string
    message: string
}

function Contact() {
    const [formInput, setFormInput] = useState<ContactFormInput>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = {
            name: formInput.name,
            email: formInput.email,
            mobile: formInput.phone,
            service: formInput.service,
            content: formInput.message,
        }

        try {
            await axios.post('api/tenant/form-submitted', formData)
            setFormInput({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            })
            setSuccess(true)
            setTimeout(() => setSuccess(false), 5000)
        } catch (error) {
            setError(
                (error as any).response?.data?.message ||
                    'Error submitting form',
            )
        }
    }

    return (
        <>
            <div
                className="container-fluid mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/display-flex.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                    <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                        Contact
                    </h1>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
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
                                <Person fontSize="medium" className="mr-2" />{' '}
                                Ajay Mundada
                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <Phone fontSize="medium" className="mr-2" /> +91
                                989 099 3201
                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <Mail fontSize="medium" className="mr-2" />{' '}
                                info@nivaecotech.com
                            </div>
                            <div className="mb-2">
                                <Place fontSize="medium" className="mr-2" />
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
                                title="Google Map"
                            />
                        </div>
                        <div
                            className="col-md-6 animate-fade-in-up"
                            style={{
                                animationDelay: '0.1s',
                                visibility: 'visible',
                            }}>
                            <div className="bg-light rounded-xl p-5 h-100 d-flex align-items-center">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    value={formInput.name}
                                                    onChange={e =>
                                                        setFormInput({
                                                            ...formInput,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                    required
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
                                                    value={formInput.email}
                                                    onChange={e =>
                                                        setFormInput({
                                                            ...formInput,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    autoComplete="email"
                                                    required
                                                />
                                                <label htmlFor="email">
                                                    Your Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="phone"
                                                    className="form-control"
                                                    id="phone"
                                                    placeholder="Your phone"
                                                    value={formInput.phone}
                                                    onChange={e =>
                                                        setFormInput({
                                                            ...formInput,
                                                            phone: e.target
                                                                .value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <label htmlFor="phone">
                                                    Your phone
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <select
                                                className="form-select border-0"
                                                style={{ height: 55 }}
                                                value={formInput.service}
                                                onChange={e =>
                                                    setFormInput({
                                                        ...formInput,
                                                        service: e.target.value,
                                                    })
                                                }
                                                id="serviceSelect"
                                                required>
                                                <option value="">
                                                    Select A Service
                                                </option>
                                                <option value="Solar Park Development">
                                                    Solar Park Development
                                                </option>
                                                <option value="Rooftop Solar EPC">
                                                    Rooftop Solar EPC
                                                </option>
                                                <option value="Operations and Maintenance">
                                                    Operations and Maintenance
                                                </option>
                                                <option value="Fund Raising">
                                                    Fund Raising
                                                </option>
                                                <option value="Project Consulting">
                                                    Project Consulting
                                                </option>
                                                <option value="Others">
                                                    Others
                                                </option>
                                            </select>
                                            <label
                                                htmlFor="serviceSelect"
                                                className="visually-hidden">
                                                Select A Service
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: '150px' }}
                                                    value={formInput.message}
                                                    onChange={e =>
                                                        setFormInput({
                                                            ...formInput,
                                                            message:
                                                                e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <label htmlFor="message">
                                                    Message
                                                </label>
                                            </div>
                                        </div>
                                        {error && (
                                            <p className="text-red-500">
                                                {error}
                                            </p>
                                        )}
                                        <div className="col-12">
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
            {success && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md">
                    <div className="w-96 bg-white p-8 rounded-lg text-center">
                        <p className="text-lg">
                            Thank you for reaching out. Your request has been
                            received, and our team will promptly review it. You
                            can expect to hear from us within the next 24 hours.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Contact
