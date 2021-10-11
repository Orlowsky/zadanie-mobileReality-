import React from 'react'
import {
    
    Link
  } from "react-router-dom";
const Houses = ({dataHouse, deleteElementHouse,setChoosenIdfunc}) => {

    return (
        <div>
            Wszystkie domy: 
            {dataHouse.map((el,index)=>{
                return (<div key={index} style={{display:'flex', width:'300px', justifyContent:'space-between'}}>
                    <Link to="/oneHouse"><p onClick={()=> {setChoosenIdfunc(el._id)
                    
                    }}>{el.address} - {el.description}</p></Link>
                    <p style={{color:"red"}} onClick={() =>{console.log("usunieto")
                        deleteElementHouse(el._id)
                }}>usuń</p>
                    
                    </div>)
            })}


        </div>
    )
}

export default Houses
