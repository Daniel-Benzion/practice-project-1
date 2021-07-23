import React, {useState} from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";


const AddUser = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState(-1);



  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }


  const addUserHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      age: enteredAge
    }

    props.onSaveUserData(userData);
    setEnteredName('');
    setEnteredAge(-1);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameChangeHandler}></input>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
