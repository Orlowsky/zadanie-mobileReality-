import React from 'react'
import MainPage1 from './MainPage1'
import MainPage2 from './MainPage2'
import MainPage3 from './MainPage3'
import '../css/mediaquerries.css'



const MainPage = () => {
    return (
        <div>
            <div className="firstPart" style={{display:'flex'}}>
                <MainPage1  />
                <MainPage2 />
            </div>
            <div className ="secondPart" style={{display:'flex'}}>
                <MainPage3 />
                <MainPage1 />
            </div>
        </div>
    )
}

export default MainPage
