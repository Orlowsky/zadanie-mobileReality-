import React from 'react'
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={{width:'300px'}}>
            <ul>
            <li>
              <Link to="/">Strona Główna</Link>
            </li>
            <li>
              <Link to="/houses">Wszystkie Domy</Link>
            </li>
            <li>
              <Link to="/addHouse">Dodaj Dom</Link>
            </li>
          </ul>
        </div>
    )
}

export default NavBar
