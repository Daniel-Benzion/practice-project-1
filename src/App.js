import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUserData) => {

    const userData = {
      ...enteredUserData,
      id: Math.random.toString()
    }
    setUsers((prevUserData) => {
      return [userData, ...prevUserData];
    })
  }


  return (
    <div>
      <AddUser onSaveUserData={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
