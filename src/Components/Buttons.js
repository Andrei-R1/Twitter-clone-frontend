import axios from "axios";
import { useState } from "react";

export function Like(props) {
  const userId = 1;

  async function fetchData() {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/likes",
      data: {
        userId: userId,
        tweetId: props.tweetId,
      },
    });
    console.log(data);
  }

  return (
    <form onSubmit={ fetchData }>
      <button type="submit">Like</button>
    </form>
  );
}

export function Comment(props) {
  const userId = 1;
  const [content, setContent] = useState("")

  async function fetchData() {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8000/comments",
      data: {
        userId: userId,
        tweetId: props.tweetId,
        content: content,
      },
    });
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={ fetchData }>
        <label htmlFor="content">Write a comment</label>
        <input type="text" id="content" onChange={ (e) => setContent(e.target.value) } value={ content } required />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}
