import { Link } from "react-router-dom";
import {userProfileContext} from "./Context"
import { useContext } from "react";
export const Page2 = () => {
  const { isDarkThemeEnable,toggleTheme} = useContext(userProfileContext);

  return (
    <>
    <div className={(isDarkThemeEnable)? "dark" :"light"}>
      <p> This is page 2</p>
           <Link to='/'> <p>Page1</p></Link>
           <Link to='/page3'> <p>Page3</p></Link>
           <Link to='/page4'> <p>Page4</p></Link>
           <button onClick={toggleTheme}>ChangeTheme</button>
          
           </div>
    </>
  );
};
