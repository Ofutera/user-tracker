import React, { Fragment, useState } from "react";
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
    <Fragment>
      <AddUser onAddNewUser={addNewUser} />
      <UserList userArray={users} />
    </Fragment>
  );
}

export default App;
