import React from 'react'
import "./HeroText.css"
import { FaArrowRight } from "react-icons/fa6";

const HeroText = () => {
    return (
        <div className='HeroText'>
            <div className="hero-text-div">
                <p>Empowering your portfolio through quant investment</p>
                <h6 className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt.</h6>
                <button>
                    Get a Demo
                    <div>
                        <FaArrowRight />
                    </div>
                </button>

            </div>
        </div>
    )
}

export default HeroText
