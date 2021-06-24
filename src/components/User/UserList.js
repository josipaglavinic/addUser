import React from 'react';
import classes from  './UsersList.module.css';
import Card from '../UI/Card';


const UserList = props => {

    return (
        <Card className={classes.users}>
            <ul>
                
                {/* we relay on props to get out actual array of users as data
          we use props.user (we chose the name), than we use map method to map array of users
          to an array of JSX elements; in the annonimus arrow function we return JSX element for every user
          we render a list element;user is a object with a name and age property
          users is an array of user objects where every object has a name and age property 
          key is aded so every user have unique id*/}
                {props.users.map(user => (
                    <li key={user.id}>
                        
                        {user.name} ({user.age} years old)
                    </li>
                ))}

            </ul>
        </Card>
    );
};

export default UserList;