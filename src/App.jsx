import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

export default function App() {
  const [userInput, setUserInput] = useState([]);

  const handleUserInput = (userInput) => {
    setUserInput((prevUsers) => {
      return [...prevUsers, userInput];
    });
  };

  return (
    <>
      <AddUser onUserInput={handleUserInput} />
      <UserList data={userInput} />
    </>
  );
}
