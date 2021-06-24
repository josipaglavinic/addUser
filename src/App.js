import React, { useState } from 'react';
import NewUser from './components/User/NewUser';
import UserList from './components/User/UserList';

function App() {

  const [usersList, setUsersList] = useState([]); 
  // addUserHandler is a function in which we expect 2 arguments:name ande age
  //with that data we can create a new user(call setUserList and updating the state)
  //we take the old list and appending a new element to it
  const addUserHandler = (uName, uAge) => {
    //when a state update relies on previous state we use ...(copy all elements from prevUserList)
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:uName, age:uAge, id:Math.random().toString()}];
      //id must be added so we have unique users 
    });
  };

  return (
    <>
      <NewUser onAddUser= {addUserHandler} />
      <UserList users={usersList} />
      {/* <UserList users={[]} /> */}
      {/* to the UserList we must add props which is users and set it to an array, because we have a map function
      that requires an array of users, so we add empty array*/}
    </>
  );
}

export default App;
