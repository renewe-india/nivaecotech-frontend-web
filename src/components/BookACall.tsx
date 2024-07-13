'use client'
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

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Add your form submission logic here
    }
    return (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="bg-light rounded text-center p-5">
                    <h1 className="mb-4">Book For A Call</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
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
                                />
                                <label
                                    htmlFor="emailInput"
                                    className="visually-hidden">
                                    Your Email
                                </label>
                            </div>
                            <div className="col-12 col-sm-6">
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
                                    id="serviceSelect">
                                    <option value="">Select A Service</option>
                                    <option value="1">Solar Park</option>
                                    <option value="2">Rooftop Solar</option>
                                    <option value="3">
                                        Maintenance of Existing Project
                                    </option>
                                </select>
                                <label
                                    htmlFor="serviceSelect"
                                    className="visually-hidden">
                                    Select A Service
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
                                />
                                <label
                                    htmlFor="contactNumberInput"
                                    className="visually-hidden">
                                    Contact Number
                                </label>
                            </div>
                            <div className="col-12">
                                <textarea
                                    className="form-control border-0"
                                    placeholder="Special Request"
                                    value={formInput.specialRequest}
                                    onChange={e =>
                                        setFormInput({
                                            ...formInput,
                                            specialRequest: e.target.value,
                                        })
                                    }
                                    id="specialRequestInput"
                                />
                                <label
                                    htmlFor="specialRequestInput"
                                    className="visually-hidden">
                                    Special Request
                                </label>
                            </div>
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
