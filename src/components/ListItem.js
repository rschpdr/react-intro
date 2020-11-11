import React from "react";

function ListItem(props) {
  return <li>{props.children.toUpperCase()}</li>;
}

export default ListItem;
