import React from "react";
import styles from "./AddUser.module.css";

const AddUser = () => {

  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" className={styles.input} type="text"></input>

      <label htmlFor="age">Age (Years)</label>
      <input id="age" className={styles.input} type="number"></input>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
