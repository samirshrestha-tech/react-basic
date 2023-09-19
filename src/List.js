import React from "react";

export const List = ({ userArg }) => {
  return (
    <div>
      <ul>
        {userArg.map((item, i) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
