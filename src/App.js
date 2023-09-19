import React, { useState } from "react";
import { List } from "./List";

const App = () => {
  const [user, setUser] = useState("Rajiv");

  const [userArg, setUserArg] = useState(["Samir,Nick"]);

  const handleOnChange = (e) => {
    setUser(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUserArg([...userArg, user]);
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <p>{user}</p>
        <input type="text" onChange={handleOnChange} />
        <button>Add user</button>
      </form>
      <List userArg={userArg} />
    </div>
  );
};

export default App;
