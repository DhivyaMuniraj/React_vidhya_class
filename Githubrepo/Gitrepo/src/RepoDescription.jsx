import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const RepoDescription = () => {
  console.log("repodescription page");
  const [repodata, setrepodata] = useState({});
  const param = useParams();
  
  const { username, reponame } = param;

  // console.log("hi", location.state);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`)
      .then((data) => data.json())
      .then((data) => setrepodata(data));
  }, [username, reponame]);

  // console.log(dataVal)

  //  const{item,data}=props
  console.log("repodes", repodata);
  return (
    <>
   <div  className="repo_description_div">
      {/* {console.log(dataVal.itemValue.id)} */}
      {repodata !== null ? (
        <>
        <div  className="repo_description">
          {/* {console.log(repodata.owner)} */}
          <img src={repodata.owner.avatar_url}></img>
          <p>{repodata.id}</p>
          <p>{repodata.description}</p>
          <h5>{repodata.name}</h5>
         
          </div>
        </>
      ) : (
        <></>
      )}
     </div>
    </>
  );
};
export default RepoDescription;
