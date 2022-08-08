import { useState } from "react";
import axios from "axios";

export function Tweet() {
  const [content, setContent] = useState("");

  const postTweet = async (e) => {
    e.preventDefault();
    setContent("");
    try {
      async function fetchData() {
        const { data } = await axios({
          method: "post",
          url: "https://proyecto-twitter-clone-backend.herokuapp.com/tweets",
          data: {
            content: content,
            userId: 1,
          },
        });
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }
  
  return (
    <div>
      <h3>Home</h3>
      <form onSubmit={ postTweet }>
        <label htmlFor="content">Whats happening?</label>
        <input type="text" id="content" onChange={ (e) => setContent(e.target.value) } value={ content } required />
        <button type="submit">Tweet</button>
      </form>
    </div>
  );
}