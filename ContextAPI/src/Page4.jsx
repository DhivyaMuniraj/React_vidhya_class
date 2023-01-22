import { Link } from "react-router-dom";
import { useContext } from "react";
import {userProfileContext} from "./Context"
export const Page4 = () => {
  const { isDarkThemeEnable,toggleTheme} = useContext(userProfileContext);

  return (
    <>
    <div className={(isDarkThemeEnable)? "dark" :"light"}>
      <p> This is page 4</p>
           <Link to='/'> <p>Page1</p></Link>
           <Link to='/page2'> <p>Page2</p></Link>
           <Link to='/page3'> <p>Page3</p></Link>
           <button onClick={toggleTheme}>ChangeTheme</button>
          
           </div>
    </>
  );
  };
  