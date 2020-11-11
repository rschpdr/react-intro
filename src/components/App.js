// Três pilares do React: JSX, state e props
import React from "react";
import "../styles.css";
import "bulma/css/bulma.css";

import List from "./List";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <List />
      {/* <Comment
        avatar="https://i.pravatar.cc/100"
        author="Deninho"
        time={new Date().toLocaleTimeString()}
      >
        laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo
        necessitatibus dolor quam autem quasi reiciendis et nam sapiente
        accusantium
      </Comment>
      <Comment
        avatar="https://i.pravatar.cc/100"
        author="Juliana"
        time={new Date().toLocaleTimeString()}
      >
        est natus enim nihil est dolore omnis voluptatem numquam et omnis
        occaecati quod ullam at voluptatem error expedita pariatur nihil sint
        nostrum voluptatem reiciendis et
      </Comment>
      <Comment
        avatar="https://images.dog.ceo/breeds/retriever-golden/n02099601_3869.jpg"
        author="Buzz"
        time={new Date().toLocaleTimeString()}
      >
        au au
      </Comment> */}
    </div>
  );
}

export default App;
