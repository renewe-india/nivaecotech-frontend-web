import {
    CalendarMonth,
    Diversity1,
    ElectricBolt,
    SolarPower,
} from '@mui/icons-material'
import React from 'react'

const FactsSection: React.FC = () => {
    return (
        <div
            className="container-fluid fact bg-dark my-5 py-5"
            style={{ backgroundImage: "url('/brain.jpg')" }}>
            <div className="container">
                <div className="row g-4">
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeIn',
                        }}>
                        <CalendarMonth
                            fontSize="large"
                            className="text-white mb-3"
                        />
                        <h2
                            className="text-white mb-2"
                            data-toggle="counter-up">
                            9
                        </h2>
                        <p className="text-white mb-0">Years Experience</p>
                    </div>
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeIn',
                        }}>
                        <ElectricBolt
                            fontSize="large"
                            className="text-white mb-3"
                        />
                        <h2
                            className="text-white mb-2"
                            data-toggle="counter-up">
                            2000
                        </h2>
                        <p className="text-white mb-0">Mega Watt</p>
                    </div>
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeIn',
                        }}>
                        <Diversity1
                            fontSize="large"
                            className="text-white mb-3"
                        />
                        <h2
                            className="text-white mb-2"
                            data-toggle="counter-up">
                            25
                        </h2>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div
                        className="col-md-6 col-lg-3 text-center wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeIn',
                        }}>
                        <SolarPower
                            fontSize="large"
                            className="text-white mb-3"
                        />
                        <h2
                            className="text-white mb-2"
                            data-toggle="counter-up">
                            40
                        </h2>
                        <p className="text-white mb-0">Complete Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactsSection
