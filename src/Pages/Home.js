import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Header } from "../Components/Header";
import { Tweet } from "../Components/Tweet";
import { Like } from "../Components/Buttons";
import { Comment } from "../Components/Buttons";
import "./home.css";

export function Home(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: "https://proyecto-twitter-clone-backend.herokuapp.com/tweets",
        });
        setTweets(data);
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
      <div id="container">
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="tweet-post">
          <Tweet />
        </div>
      </div>
      <div>
        <div id="tweet-box">
          {tweets
            ? tweets.reverse().map((el, i) => {
                return (
                  <div id="tweets-home" key={i}>
                    <h4>{el.user.name}</h4>
                    <h5>@{el.user.username}</h5>
                    <p>{el.content}</p>
                    <Like tweetId={el.id} />
                    <p>{el.likes.length}</p>
                    <Comment tweetId={el.id} />
                    <p>{el.comments.length}</p>
                    <div id="comments">
                      {el.comments.map((el, i) => {
                        return (
                          <div id="comments-home" key={i}>
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
    </div>
  );
}
