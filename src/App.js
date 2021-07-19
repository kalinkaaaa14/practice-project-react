import React , {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const onAddUserHandler = (userName, userAge) =>{
        setUsersList((prevUsersList) =>{
           return [...prevUsersList, {
               name: userName,
               age: userAge,
               id: Math.random().toString()
           }]
        })
    }
  return (
    <div>
<AddUser onAddUser = {onAddUserHandler}/>
<UsersList users = {usersList} />
    </div>
  );
}

export default App;
