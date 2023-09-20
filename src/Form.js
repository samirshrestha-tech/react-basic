import React, { useState } from "react";

export const Form = ({ addUser }) => {
  const [user, setUser] = useState("Rajiv");
  //  controlled method
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUser(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // uplift the props
    addUser(user);
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <p>{user}</p>
        <input type="text" onChange={handleOnChange} />
        <button>Add user</button>
      </form>
    </div>
  );
};
