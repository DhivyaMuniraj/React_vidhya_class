import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Followers = () => {
  console.log("followers page")
  const param = useParams();
  const { username } = param;
  // console.log("Followers",username);
  // console.log("f", location.state.Followers);
  // const [fname, setFname] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/followers`
      // headers: {

      //     Authorization:

      //       "Bearer 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 ",

      //   },
    )
      .then((data) => data.json())
      .then((data) => setFollowers(data));
  }, [username]);

  // useEffect(() => {
  //   setFname(location.state.Followers);
  // }, []);

  // }
  console.log("FOLLOWERS DETAIL", followers);

  // console.log("followers");
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {" "}
        <h2>FOLLOWERS</h2>
      </div>
      <div className="followers">
        {followers.length > 0 ? (
          <>
            {followers.map((item) => {
              return (
                <>
                  <div className="followers_div">
                    {/* <img src={item.owner.avatar_url}></img> */}
                    <p key={item.id}>{item.login}</p>
                    {/* <Link to={`//${ item.login}`}> */}
                    <Link className="link" to={`/${item.login}`}>
                      {/* <Link {{pathname:"/",search: `?name=${userName}`}}> */}
                      <button>View Profile</button>
                    </Link>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>No Followers</>
        )}

        {/* <br></br>
        
        {(followers.length>0)?followers.map((item)=>{
            return(
                <>
                <p key={item.id}>{item.login}</p>
            
                </>
            )
        }):false} */}
      </div>
    </>
  );
};
export default Followers;
