import React from 'react'
import {
    Link
  } from "react-router-dom";

const OneHouse = ({dataHouse, oneChoosenId,deleteElementHouse}) => {
  const showData = dataHouse.find((el,index)=>{
    if(el._id === oneChoosenId){
        return el
        
    }
    
})
console.log(showData)

    return (
        <div style={{display: 'flex',width:1000, justifyContent:'space-around'}}>
            <p>{showData._id}</p>
            <p>{showData.address}</p>
            <p>{showData.createdAt}</p>
            <p>{showData.description}</p>
            <p>{showData.floorsNumber}</p>
            <p>{showData.label}</p>
            <p>{showData.updatedAt}</p>
            <Link to="/houses"> <p style={{color:"red"}} onClick={() =>{console.log("usunieto")
                        deleteElementHouse(showData._id) 
                }}>usuń</p></Link>
        </div>
    )
}

export default OneHouse
