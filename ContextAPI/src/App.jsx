

import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";

import { createContext ,useState, useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import{ContextProvider} from './Context'



function App() {
  
  
  const [isDarkThemeEnable, setIsDarkThemeEnable] = useState(false);
 
  const toggleTheme = () =>setIsDarkThemeEnable((prev)=>!prev)
  
  return (
    <ContextProvider value={{isDarkThemeEnable,toggleTheme}}>

      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
