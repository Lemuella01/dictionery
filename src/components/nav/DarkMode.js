
import React from 'react'
import {BsMoon} from 'react-icons/bs'
import Switch from "react-switch";
import { GlobalUseContext } from '../context/Context';

const DarkMode = () => {
 
  const {checked, theme, handleTheme} = GlobalUseContext();

  return (
    // ={`App ${darkMode ? 'dark' : 'light'}`} 
    <div className="flex">
  {/* <div >
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div>
        <div></div>
      </div>
    </div> */}

          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
      <Switch
           onChange={handleTheme}
           checked={theme === 'dark'}
           className={`App ${checked} ? "react-switch dark" : "react-switch light" `}
           onColor="#be2de6"
           onHandleColor="#fff"
           handleDiameter={15}
           uncheckedIcon={false}
           checkedIcon={false}
           boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
           activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
           height={20}
           width={48}
        
           
        />
 
         <BsMoon onClick={handleTheme}/>
  </div>
     
   
  )
}

export default DarkMode