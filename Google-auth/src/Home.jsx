import { useContext, useEffect } from "react";
import { profileContext } from "./Context/authContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { isAuthDone, userProfile } = useContext(profileContext);
 
  useEffect(() => {
    if (!isAuthDone) {
      alert("Please signin");
      navigate("/");
    }
  }, []);

  return (
    <>
    
      <h1>Profile Display</h1>
      <p>{userProfile.displayName}</p>
      <p>{userProfile.email}</p>
    </>
  );
}
export default Home;
