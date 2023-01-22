import { Link } from "react-router-dom";
import { useContext } from "react";
import {userProfileContext} from "./Context"
export const Page3 = () => {
  const { isDarkThemeEnable,toggleTheme} = useContext(userProfileContext);

  return (
    <>
    <div className={(isDarkThemeEnable)? "dark" :"light"}>
      <p> This is page 3</p>
           <Link to='/'> <p>Page1</p></Link>
           <Link to='/page2'> <p>Page2</p></Link>
           <Link to='/page4'> <p>Page4</p></Link>
           <button onClick={toggleTheme}>ChangeTheme</button>
        
           </div>
    </>
  );
  };
  