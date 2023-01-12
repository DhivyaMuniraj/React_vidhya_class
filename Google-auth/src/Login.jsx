import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "./Firebase"
import { profileContext } from "./Context/authContext";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
function Parent() {
  const { setUserProfile, isAuthDone, setAuthDone } =
    useContext(profileContext);
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserProfile(data.user);
        setAuthDone(true);
      })
      .catch(() => {
        alert('Data is not fetched');
      });
  };
  const navigate = useNavigate();

  return (
    <>
      <button onClick={googleSignIn}>
        Login with Google
      </button>
      {(isAuthDone) ? navigate("/Home") : undefined}
    </>
  );
}

export default Parent;
