import React, { useRef, useState } from "react";

const TweetBox = () => {
  const input = useRef();
  const [text, setText] = useState("NA");

  const postTweet = () => {};
  return (
    <div>
      <input
        type="text"
        ref={input}
        onChange={() => setText(input.current.value)}
      ></input>
      <button onClick={() => console.log(input.current.value)}>submit</button>
      <p>{text}</p>
    </div>
  );
};

export default TweetBox;
