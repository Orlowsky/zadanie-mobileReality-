import React from 'react'
import image1 from '../image/1.jpg'
import image2 from '../image/2.webp'
import image3 from '../image/1.jpg'
import backgroundImageHouse from '../image/3.jpg'

const imageStyle = {
    
    
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height:'auto',
      
}
const imageTextBackgroundStyle = {
    width:'50%', display:'flex', position:'relative', alignItems:'center',
    backgroundImage: `url(${backgroundImageHouse})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center'
}

const MainPage2 = () => {
    return (
        <div style={{width: '50%', display:'flex', flexDirection:'column'}}>
            <div style= {{width:'100%', display:'flex'}}>
            <div style={{width:'50%', display:'flex', position:'relative'}}>
                        <img src={image2} style={imageStyle} alt="image1"/>
                    </div>
                    <div style={{width:'50%', display:'flex', position:'relative'}}>
                        <img src={image1} style={imageStyle} alt="image2"/>
                    </div>
                    </div>
                    <div style = {{width:'100%', display:'flex'}}>
                    <div style={{width:'50%', display:'flex', position:'relative'}}>
                        <img src={image3} style={imageStyle} alt="image3"/>
                    </div>
                    <div style={imageTextBackgroundStyle}>
                        <p>text jakiś text jakiś, text jakiś text jakiś,text jakiś text jakiś,text jakiś text jakiś</p>
                    </div>
                    </div>
        </div>
    )
}

export default MainPage2
