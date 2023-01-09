import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RepoDescription from './RepoDescription'
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import Followers from './Followers';
import FollowDesc from './FD';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:username" element={<FollowDesc />} />
            <Route path={"/:reponame/:username"} element={<RepoDescription />} />
            <Route path={"/Followers/:username"} element={<Followers/>}/>
            {/* <Route path='/Repos' element={<FollowDesc/>}/> */}
           
        </Routes>
        </BrowserRouter>
 
)
