import React from 'react'
import backgroundImageHouse from '../image/3.jpg'
import '../css/mediaquerries.css'

const paraStyle={
    margin:0
}

const MainPage3 = () => {
    return (
        <div className= "thirdPart" style={{width:'50%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImageHouse})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
        }}>
            <div style={{display:'flex',
    flexDirection: 'column'}}>

           
           <p style={paraStyle}>Budowa domów z drewna</p>
           <p style={paraStyle}>Budowa domów z drewna</p>
           <p style={paraStyle}>Budowa domów z drewna</p>
           <p style={paraStyle}>Budowa domów z drewna</p>
           <p style={paraStyle}>Budowa domów z drewna</p>
           <p style={paraStyle}>Budowa domów z drewna</p>
           </div>
        </div>
    )
}

export default MainPage3
