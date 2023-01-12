import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useState } from "react";
import Parent from "./Login";
import { ContextProvider } from "./Context/authContext";
import Home from "./Home";
import "./App.css";

function App() {
  const [userProfile, setUserProfile] = useState({});
  const [isAuthDone, setAuthDone] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parent />,
    },
    {
      path: "/Home",
      element: <Home/>,
    },
  ]);

  return (
    <ContextProvider
      value={{ userProfile, setUserProfile, isAuthDone, setAuthDone }}>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  );
}

export default App;
