import React from "react";

function DessertsList(props) {
  const listItems = props.data
    .sort((a, b) => (a.calories > b.calories ? 1 : -1))
    .filter((di) => di.calories < 500)
    .map((di) => {
      const itemText = `${di.name} - ${di.calories}`;
      return <li>{itemText}</li>;
    });
  return <ul>{listItems}</ul>;
}

export default DessertsList;
