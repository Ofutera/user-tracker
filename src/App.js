import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const defaultList = [
    {
      id: 1,
      username: "Ondrej",
      age: 34,
    },
    {
      id: 2,
      username: "Luis",
      age: 42,
    },
  ];

  return (
    <div>
      <AddUser />
      <UserList defaultList={defaultList} />
    </div>
  );
}

export default App;
