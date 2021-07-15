import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (username, userAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), username: username, age: userAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={addNewUser} />
      <UserList userArray={users} />
    </div>
  );
}

export default App;
