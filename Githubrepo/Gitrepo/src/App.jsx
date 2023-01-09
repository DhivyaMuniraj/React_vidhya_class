import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import Input from "./Input";
import FollowDesc from "./FD";
// import {useNavigate} from "react-router-dom";
// import RepoDescription from "./RepoDescription";
import { useNavigate } from "react-router-dom";

function App() {
  console.log("input page")
  const [userName, setUserName] = useState("");
  
 
  // const[submit,setSubmit]=useState(false);
  // const[description,setDescription]=useState([]);
  // let location = useLocation();
  // console.log(location.state);
  // useEffect(() => {
  //   if (location.state !== null) {
  //     setUserName(location.state.userName);
  //   } else {
  //     setUserName("");
  //   }
  // }, []);
  
    
  
  // const navigate = useNavigate();

  return (
    <>
      <div className="input_div">
        <h3>GITHUB REPOSITORY</h3>
        <>
          {
            <Input
              value={userName}
              type="text"
              placeholder="Enter the Username"
              onChange={(value) => setUserName(value)}
            />
          }
        </>
        
        {/* <p>{userName}</p> */}
        <Link className="link" to={`/${userName}`}>
        <button>Submit</button>
        </Link>
        </div>
        {/* <div>
        {submit &&  <FollowDesc data={data} userName={userName} apiCall={apiCall} />}
        </div> */}
    </>
  );
}

export default App;
