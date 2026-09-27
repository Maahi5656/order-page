import React from 'react'

// import '../app/style.css'

const Timeline = () => {
    return (
        <>
            <div className="horizontal-timeline">
                <div className="wrapper">
                    <div className="timeline-area">
                        <div className="line-area"></div>
                        <div className="single-item active">
                            <span>
                                <h2>Processing</h2>
                                <small>April 25 10:24 AM</small>
                            </span>
                        </div>
                        <div className="single-item">
                            <span>
                                <h2>Shipped</h2>
                                <small>April 26 02:18 AM</small>
                            </span>
                        </div>
                        <div className="single-item">
                            <span>
                                <h2>Out For Delivery</h2>
                                <small>April 26 02:18 AM</small>
                            </span>
                        </div>
                        <div className="single-item">
                            <span>
                                <h2>Delivered</h2>
                                <small>April 26 02:18 AM</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline