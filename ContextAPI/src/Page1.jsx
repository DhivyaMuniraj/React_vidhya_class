import "./App.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userProfileContext } from "./Context";

export const Page1 = () => {
  const { isDarkThemeEnable, toggleTheme} = useContext(userProfileContext);
console.log("child")
  return (
    <>
      <div className={isDarkThemeEnable ? "dark" : "light"}>
        <p>This is page1</p>
        <div>
          <Link to="/page2">
            <p>Page2</p>
          </Link>
          <Link to="/page3">
            <p>Page3</p>
          </Link>
          <Link to="/page4">
            <p>Page4</p>
          </Link>
        
        </div>
        <button onClick={toggleTheme}>ChangeTheme</button>
       
  
     
   
    
      </div>
    </>
  );
};
