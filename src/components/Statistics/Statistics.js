import React from 'react'
import "./Statistics.css"
import { CgProfile } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";

const Statistics = () => {
    return (
        <div className='statistics'>
            <div className="data">
                <div className="one">
                    <div className="icon">
                        <CgProfile size={"40px"} />
                    </div>
                    <div className='text'>
                        <p className='number'>8000+</p>
                        <h6 className='trusted'>Trusted by 8000+ Clients</h6>
                    </div>
                </div>
                <div className="one">
                    <div className="icon">
                        <CgProfile size={"40px"} />
                    </div>
                    <div className='text'>
                        <p className='number'>1500+ Cr</p>
                        <h6 className='trusted'>Assets under management</h6>
                    </div>
                </div>
                <div className="one">
                    <div className="icon">
                        <CgProfile size={"40px"} />
                    </div>
                    <div className='text'>
                        <p className='number'>Pioneers</p>
                        <h6 className='trusted'>Quant Investment in India</h6>
                    </div>
                </div>
            </div>
            <div className="form-box">
                <p className='looking'>Looking for Investment Solutions?</p>
                <div className="full-form">
                    <form className='form-left'>
                        <label htmlFor="name" className='name'>Name *</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            placeholder='John'
                        />
                        <br />
                        <br />
                        <label htmlFor="mobile" className='num'>Mobile No. *</label>
                        <br />
                        <input
                            type="number"
                            id="number"
                            placeholder='00 (123) 456 78 90'
                        />
                    </form>
                    <form className='form-right'>
                        <label htmlFor="name" className='email'>Email *</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            placeholder='john@email.com'
                        />
                        <br />
                        <br />
                        <label htmlFor="invest" className='invest'>Looking to invest (In Rs.) *</label>
                        <br />
                        <input
                            type="text"
                            id="invest"
                        />
                    </form>

                </div>
                <div className="mark">
                    <input type='checkbox' className='checkbox'></input>
                    <p className='authorize'>I authorize Estee Advisors Pvt. Ltd. to contact me. This will override registry on the NDNC. As per SEBI guide Lines, minimum investment required is of ₹50 Lakhs.</p>
                </div>
                <button className='btn'>REQUEST CALLBACK
                    <div>
                        <FaArrowRight />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Statistics
