 import { useState, createContext, useContext } from "react"


 export const AppContext = createContext(null)




 export const AppProvider =({children})=>{
  const [selectedFont, setSelectedFont] = useState('serif');
  const [theme, setTheme] = useState('dark')
  const [checked, setChecked] = useState(false);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };


  const fontFamily=()=>{
    if(selectedFont === "serif"){
      return "Family-serif";
    }
    if(selectedFont === "monospace"){
      return "Family-mono";
    }
    if(selectedFont === "sans-serif"){
      return "Family-sans";
    }
  }


  const handleTheme =()=>{
    setTheme((curr)=> (curr === "light" ? "dark" : "light"));
  }

const globalData = {
  selectedFont,
  theme, 
  checked,
  handleChange,
  setSelectedFont, 
  fontFamily, 
  handleTheme};

  return <AppContext.Provider value={globalData}>
{children}
  </AppContext.Provider>
 }

 export const GlobalUseContext=()=>{
  return useContext(AppContext)
 }