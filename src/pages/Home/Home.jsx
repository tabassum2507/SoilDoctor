import React from 'react'
import logo from "../../images/logo.png";
// import './home.css'
import { HiChevronRight } from "react-icons/hi2";

function Home() {
  return (
    <div className='home'>

        <div className='home__text'>
            <img className='home__text--logo' src ={logo} style={{ marginRight : "20px"}}/>
            <div className='home__text__name'>Soil <span>Doctor</span></div>
        </div>

        <div className="home__button">
            <button type="submit" >Soil Recommendation <HiChevronRight style={{ marginLeft : "20px"}}/></button>
        </div>



    </div>
  )
}

export default Home