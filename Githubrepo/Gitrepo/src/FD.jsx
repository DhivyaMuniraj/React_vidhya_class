import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FollowDesc = () => {
  console.log("repo page")
  const param =useParams();
  const [data, setData] = useState([]);
  const{username}=param
  // console.log("FD data", data);
  // console.log("FD1", username);

  // console.log("name FD", userName);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
     .then((data) => data.json())
    .then((data) => {
       setData(data);
    });
  }, [username]);

  // console.log("followers FD", followers);
  return (
    <>
      <div>
        <div className="profile_followers">
          <Link className="link" to={`/Followers/${username}`}>
            {data[0] && data[0].owner && data[0].owner.avatar_url && (
              <>
                <div>
                  <img src={data[0].owner.avatar_url}></img>
                </div>
                <div>
                  <button>Followers</button>
                </div>
              </>
            )}
          </Link>
        </div>
        {/* {console.log(followers)} */}

        {/* onClick={followerrApi} */}
        {/* <Followers userName={userName} apiCall={apiCall}/> */}
        <div className="repo_list_div">
          {data.length > 0 ? (
            <>
              {data.map((item) => {
                return (
                  <>
                    <div className="repo_list">
                      {/* <img src={item.owner.avatar_url}></img> */}

                      <Link
                        className="link"
                        to={`/${item.name}/${username}`}
                        // state={{ itemValue: item }}
                      >
                        <h5 key={item.id}>{item.name}</h5>
                      </Link>
                      {<p key={item.id}> {item.visibility}</p>}
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>{/* <p>No data is found</p> */}</>
          )}
        </div>
      </div>
    </>
  );
};
export default FollowDesc;
