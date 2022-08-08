import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Components/Header";
import { Like } from "../Components/Buttons";
import { Comment } from "../Components/Buttons";

export function Profile(props) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:8000/users/1",
        });
        setUser(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="text-center" key={user.id}>
        <img
          src="https://pbs.twimg.com/profile_images/1509537990728638466/BdQCHD8x_400x400.jpg"
          alt="avatar"
          className="rounded-circle"
          style={{ width: "200px" }}
        />
        <h4>{user.name}</h4>
        <h5>@{user.username}</h5>
        <p>{user.createdAt}</p>
      </div>
      <div>
        {user.tweets
          ? user.tweets.reverse().map((el, i) => {
              return (
                <div key={i}>
                  <h4>{el.name}</h4>
                  <h5>{el.username}</h5>
                  <p>{el.content}</p>
                  <Like tweetId={el.id} />
                  <p>{el.likes.length}</p>
                  <Comment tweetId={el.id} />
                  <p>{el.comments.length}</p>
                  <div id="comments" >
                      {el.comments.map((el, i) => {
                        return (
                          <div key={i}>
                            <h4>{el.user.name}</h4>
                            <h5>@{el.user.username}</h5>
                            <p>{el.content}</p>
                          </div>
                        );
                      })}
                    </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
