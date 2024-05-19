import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    try {
      {
        /*Complete the missing code*/
        let res = await axios({
          method: "get",
          url: `https://reqres.in/api/users`,
        });
  
        setPosts(res?.data?.data);
        setLoading(false);
        console.log(res.data)
      }
    } catch (error) {
      {
        /*Complete the missing code*/
        setError(true);
      setLoading(false);
      }
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
      {/*Complete the missing code*/
      posts?.map((e,i)=>{
        console.log(e,i)
        return <div style={{background:"green",padding:"5px",marginTop:"5px"}} key={i}>
              <img src={e.avatar} alt="" />
              <h4>ID : {i}</h4>
              <h4>Name : {e.first_name+" "+e.last_name}</h4>
              <h5>Email : {e.email}</h5>
              

        </div>
      })
      }
    </div>
  );
}

export default Posts;
