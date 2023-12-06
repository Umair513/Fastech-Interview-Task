import React from 'react'
import "./ThreeCards.css"
import One from "./one.png"
import Two from "./Two.png"
import Three from "./Three.png"
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { TbSteam } from "react-icons/tb";
import { FaChartArea } from "react-icons/fa";

const ThreeCards = () => {
    return (
        <div className='alpha'>
            <div className="alpha-div">
                <p>Adding Alpha through <span>Estee’s 3 fundamental advantages</span></p>
            </div>
            <div className='cards'>
                <div className="card">
                    <img src={One} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="icon-box">
                            <BsFillCloudRainHeavyFill style={{ fontSize: "30px" }} className='icon' />
                        </div>
                        <h3>Technology</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={Two} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="icon-box">
                            <TbSteam style={{ fontSize: "30px", marginBottom: "10px" }} className='icon' />
                        </div>
                        <h3>Team</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={Three} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="icon-box">
                            <FaChartArea style={{ fontSize: "30px" }} className='icon' />
                        </div>
                        <h3>Technology</h3>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ThreeCards
