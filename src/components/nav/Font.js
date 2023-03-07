import React, { useState, useEffect, useRef } from 'react'
import { GlobalUseContext } from '../context/Context'



const Font = () => {
  const dropdownRef = useRef(null);
  const {selectedFont, setSelectedFont, theme } = GlobalUseContext()
  const [toggle, setToggle] = useState(false)


  const handlerToggle=()=>{
    setToggle(!toggle);
  }
  
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
       setToggle(false)
      }
    }
   
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
 
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // useEffect(() => {
  //   document.addEventListener("click", handleCloseDropdown);
  //   return () => {
  //     document.removeEventListener("click", handleCloseDropdown);
  //   };
  // }, []);
  
  // const handleCloseDropdown = () => {
  //   setToggle(false);
  // };

  return (
<div  className='' ref={dropdownRef} >
  <input onClick={handlerToggle} value={selectedFont} readOnly className={theme === 'dark' ? 'bg-black text-white outline-none' : 'bg-white text-black outline-none'} />
  <ul  className={toggle ? 'block border-2 rounded-sm px-6 py-3' : 'hidden'}>
  <li onClick={()=>{setSelectedFont('serif')}}>Serif</li>
  <li onClick={()=>{setSelectedFont('sans-serif')}}>San</li>
  <li onClick={()=>{setSelectedFont('monospace')}}>Monospace</li>
  </ul>
    {/* <select className=' w-36 font-semibold outline-none text-lg border-r border-gray-200 bg-transparent  ' value={selectedFont}  onChange={e => setSelectedFont(e.target.value)}>
  <option value="Arial">Serif</option>
  <option value="Helvetica">Sans serif</option>
  <option className=' ' value="Verdana">Monospace</option> */}
  {/* <option value="Tahoma">Tahoma</option>
  <option value="Times New Roman">Times New Roman</option> */}
 
{/* </select> */}

<div className=''></div>
</div>

  )
}

export default Font