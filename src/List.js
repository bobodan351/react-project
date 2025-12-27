import React from "react";
import Listitems from "./Listitems";

const List = ({ items, isLoading,setIsLoading }) => {
  return (
    <ul>
      {isLoading
        ? "your data is loading"
        : items.map((item, i) => (<Listitems key={i} item={item} />))}

    </ul>
  );
};

export default List;
