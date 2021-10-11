import React from 'react'
import {
    
    Link
  } from "react-router-dom";

  const mainText = {
    color: 'blue',
    
  };
  const subtitle = {
    color: 'blue',
    
  };
const MainPage1 = () => {
    return (
        <div style={{width:'50%', display:'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', padding:'4%'}}>
            <h2>Kilka słów o nas</h2>
             <p className={subtitle}>czyli kim jesteśmy i dokąd zmierzamy</p>
                <p className={mainText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className={mainText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Link to="/houses">Zobacz wiecej</Link>
        </div>
    )
}

export default MainPage1
