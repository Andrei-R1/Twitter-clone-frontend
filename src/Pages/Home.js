import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Header } from "../Components/Header";
import { Tweet } from "../Components/Tweet";
import { Like } from "../Components/Buttons";
import { Comment } from "../Components/Buttons";

export function Home(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:8000/tweets",
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
      <div className="float">
        <Sidebar />
      </div>
      <div className="text-center">
        <Tweet />
      </div>
      <div>
        <div>
          {tweets.reverse().map((tweet) => (
            <div className="text-center" key={ tweet.id }>
              <h4>
                {tweet.user.name} @{tweet.user.username}
              </h4>
              <p>{tweet.content}</p>
              <Like tweetId={tweet.id} />
              <Comment tweetId={tweet.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
