import {React , useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from './AddUser.module.css';

const AddUsers = props => {

    const [enteredUsername, setEnteredUsername]= useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username"
                        type="text" 
                        value={enteredUsername}
                        onChange={usernameChangeHandler}/>

                <label htmlFor="age">Age (years)</label>
                <input id="age"
                        type="number"
                        value={enteredAge}
                        onChange={userAgeChangeHandler}/>

                <Button type="submit">Add Users</Button>
        </form>
        </Card>
     
    )
};

export default AddUsers;