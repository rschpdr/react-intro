import React from "react";

function Comment(props) {
  return (
    <div className="comment">
      <img src={props.avatar} alt="The commenter's avatar" />
      <div>
        <h3>{props.author}</h3>
        <small>{props.time}</small>
        <p>{props.children}</p>
      </div>
    </div>
  );
}

export default Comment;
