import React from 'react';
import AddUser from './components/Users/AddUser';

function App() {

  const addUserHandler = (enteredUserData) => {

    const userData = {
      ...enteredUserData,
      id: Math.random.toString()
    }
    //setUsers(userData)
  }

  return (
    <div>
      <AddUser onSaveUserData={addUserHandler}/>
    </div>
  );
}

export default App;
