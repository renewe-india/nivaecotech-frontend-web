'use client'

import axios from '@/lib/axios'
import React, { useState } from 'react'

interface FormInput {
    name: string
    email: string
    service: string
    contactNumber: string
    specialRequest: string
}

function BookACall() {
    const [formInput, setFormInput] = useState<FormInput>({
        name: '',
        email: '',
        service: '',
        contactNumber: '',
        specialRequest: '',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = {
            name: formInput.name,
            email: formInput.email,
            mobile: formInput.contactNumber,
            service: formInput.service,
            content: formInput.specialRequest,
        }

        try {
            await axios.post('api/tenant/form-submitted', formData)
            setFormInput({
                name: '',
                email: '',
                service: '',
                contactNumber: '',
                specialRequest: '',
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
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="bg-light rounded text-center p-5">
                    <h1 className="mb-4">Book For A Call</h1>

                    {success && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md">
                            <div className="w-96 bg-white p-8 rounded-lg text-center">
                                <p className="text-lg">
                                    Thank you for reaching out. Your request has
                                    been received, and our team will promptly
                                    review it. You can expect to hear from us
                                    within the next 24 hours.
                                </p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleFormSubmit}>
                        <div className="row g-3">
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Your Name"
                                    style={{ height: 55 }}
                                    value={formInput.name}
                                    onChange={e =>
                                        setFormInput({
                                            ...formInput,
                                            name: e.target.value,
                                        })
                                    }
                                    id="nameInput"
                                    required
                                />
                                <label
                                    htmlFor="nameInput"
                                    className="visually-hidden">
                                    Your Name
                                </label>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input
                                    type="email"
                                    className="form-control border-0"
                                    placeholder="Your Email"
                                    style={{ height: 55 }}
                                    value={formInput.email}
                                    onChange={e =>
                                        setFormInput({
                                            ...formInput,
                                            email: e.target.value,
                                        })
                                    }
                                    id="emailInput"
                                    required
                                />
                                <label
                                    htmlFor="emailInput"
                                    className="visually-hidden">
                                    Your Email
                                </label>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Contact Number"
                                    style={{ height: 55 }}
                                    value={formInput.contactNumber}
                                    onChange={e =>
                                        setFormInput({
                                            ...formInput,
                                            contactNumber: e.target.value,
                                        })
                                    }
                                    id="contactNumberInput"
                                    required
                                />
                                <label
                                    htmlFor="contactNumberInput"
                                    className="visually-hidden">
                                    Contact Number
                                </label>
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
                                    <option value="">Select A Service</option>
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
                                    <option value="Others">Others</option>
                                </select>
                                <label
                                    htmlFor="serviceSelect"
                                    className="visually-hidden">
                                    Select A Service
                                </label>
                            </div>
                            <div className="col-12">
                                <textarea
                                    className="form-control border-0"
                                    placeholder="Special Request"
                                    style={{ height: 130 }}
                                    value={formInput.specialRequest}
                                    onChange={e =>
                                        setFormInput({
                                            ...formInput,
                                            specialRequest: e.target.value,
                                        })
                                    }
                                    id="specialRequestInput"
                                    required
                                />
                                <label
                                    htmlFor="specialRequestInput"
                                    className="visually-hidden">
                                    Special Request
                                </label>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="bg-theme1-light rounded hover:bg-theme1-dark col-12">
                                <button
                                    className="btn w-100 py-3 text-white"
                                    type="submit">
                                    Request a callback
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookACall
