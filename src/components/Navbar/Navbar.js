import React from 'react'
import "./Navbar.css"
import logo from "./logo.PNG"
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="logo">
                <img src={logo} alt='logo'></img>
            </div>
            <div className="frame">
                <div className="mail">
                    <div className="mail-box">
                        <MdMailOutline className='mail-icon' />
                    </div>
                    <div className='text-div'>
                        <h6 className='text'>PMS@esteeadvisors.com</h6>
                    </div>
                </div>
                <div className="call-div">
                    <div className="call-icon-div">
                        <FiPhoneCall />
                    </div>
                    <div className='number-div'>
                        <h6 className='number'>+91-8700913486</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
