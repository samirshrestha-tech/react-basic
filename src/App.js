import React, { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

const App = () => {
  const [userArg, setUserArg] = useState(["Samir,Nick"]);

  // const handleOnChange = (e) => {
  //   setUser(e.target.value);
  // };

  const addUser = (user) => {
    // e.preventDefault();
    setUserArg([...userArg, user]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      <List userArg={userArg} />
    </div>
  );
};

export default App;
