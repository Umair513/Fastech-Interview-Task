import React from 'react'
import "./LongAlpha.css"
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoBarChartSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const LongAlpha = () => {
    return (
        <div className='long'>
            <div className="LongAlpha">
                <h6>Long <span>Alpha</span></h6>
                <h6 className='sentence'>Long Alpha is a multi-factor equity quant PMS launched in 2018 that aims to consistently outperform the benchmark equity index while maintaining low volatility.</h6>
                <div className="stateFrame">
                    <div className="stateBox">
                        <div className="icon-box1">
                            <BiSolidBarChartAlt2 style={{ fontSize: "50px", marginTop: "30px", color: "#A73A3A" }} />
                        </div>
                        <p style={{
                            fontFamily: "SF Pro Display", fontWeight: "700", font: "36px", color: "#24242E", marginRight: "50px", marginTop: "10px"
                        }}>~31.5%</p>
                        <p style={{ fontWeight: "400" }}>Long Alpha vs ~15.5% BSE 500*</p>
                    </div>
                    <div className="stateBox">
                        <div className="icon-box1">
                            <CgProfile style={{ fontSize: "50px", marginTop: "30px", color: "#A73A3A" }} />
                        </div>
                        <p style={{
                            fontFamily: "SF Pro Display", fontWeight: "700", font: "36px", color: "#24242E", marginRight: "50px", marginTop: "10px"
                        }}>80+</p>
                        <p style={{ fontWeight: "400" }}>Quant and Tech Professionals</p>
                    </div>
                    <div className="stateBox">
                        <div className="icon-box1">
                            <IoBarChartSharp style={{ fontSize: "50px", marginTop: "30px", color: "#A73A3A" }} />
                        </div>
                        <p style={{
                            fontFamily: "SF Pro Display", fontWeight: "700", font: "36px", color: "#24242E", marginRight: "50px", marginTop: "10px"
                        }}>500 BSE</p>
                        <p style={{ fontWeight: "400" }}>Lower Volatility than BSE Index</p>
                    </div>

                </div>
                <button>DOWNLOAD FACTSHEET
                    <div>
                        <FaArrowRight />
                    </div>
                </button>


            </div>
        </div>
    )
}

export default LongAlpha
