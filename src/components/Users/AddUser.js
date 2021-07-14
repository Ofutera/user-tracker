import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={usernameChangeHandler}
            type="text"
            value={enteredUsername}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            onChange={ageChangeHandler}
            type="number"
            value={enteredAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
