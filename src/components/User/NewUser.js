import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import styles from './NewUser.module.css';
import Button from '../button/Button';
import ErrorModal from '../UI/ErrorModal';

const NewUser = (props) => {
    //working with refs(we are connecting ref to a HTML element)
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName, setEnteredUserName] = useState('');
    // const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState(); //error messega

    const addUserHandler = (event) => {

        event.preventDefault();    // it prevents the defoult submit, page is not reloading
        const enteredName= nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().lenght === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name ande age!'
            });
            return;   //if the user doesn't enter the name or age it returns empty
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age!'
            });
            return;    //if the user enters age  that is lover than 0 it returns empty
            //the + before enteredUserAge converts the string to a number
        }

        //we executed it as a function, because we know as a value on that prop will be a function(we are passing a pointer)
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value=''; //rearly do that
        ageInputRef.current.value='';
        // setEnteredUserAge('');   //reseting validation to an empty string
        // setEnteredUserName('');  //we don't reflect it to the input so we have to add it in the return function in input
    };

    //event - because we listen to a deuflat DOM event and such events will dispatch objects
    //this function will be triggered for every keystroke in the input element down there
    // const usernameChangeHandler = (event) => {
    //     setEnteredUserName(event.target.value);
    //     // we set event.target.value -> that is what the user currently entered
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredUserAge(event.target.value);
    //     // we set event.target.value -> that is what the user currently entered
    // };

    //function for removing error input
    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onHandlerError={errorHandler} />}
            {/* if error occured the line abowe will be executed, else notigh will happen */}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    {/* htmlFor-sets or returns the value of the for attribute of a label */}
                    <label className='username' htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        // value={enteredUserName} //this is also for setting input empty after the user was added
                        // onChange={usernameChangeHandler}
                        //adding ref prop
                        ref={nameInputRef} //connecting ref with the function that is declared above
                    />
                    <label htmlFor='age' >Age(Years)</label>
                    <input
                        id='age'
                        type='number'
                        // value={enteredUserAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef} //connected to ref function
                    />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default NewUser;