import React , {
    useState
} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props){

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError] = useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid Input",
                message: "Please, enter a valid input( non empty values)"
            })
            return;
        }
        if( +enteredAge < 1){
            setError({
                title: "Invalid Age",
                message: "Please, enter a valid age(greater than 0)"
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const onErrorHandler =() =>{setError(null)}
return (
    <div>
        {error && <ErrorModal onConfirm = {onErrorHandler} error = {error}/>}
    <Card className={classes.input}>
   <form onSubmit={addUserHandler}>
       <label htmlFor="username">Username</label>
       <input id="username" type="text" value={enteredUsername} onChange={usernameChangedHandler}/>
       <label htmlFor="age">Username</label>
       <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler}/>
       <Button type="submit">Add User</Button>
   </form>
    </Card>
    </div>
)
}

export default AddUser;