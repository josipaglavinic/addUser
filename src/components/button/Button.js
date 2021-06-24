import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            className={styles.button}
            type={props.type || 'button'} //if button is not defined, this button value will be used as a fallback type
            onClick={props.onClick} //button is basically usable like the built in button
        >
            {props.children} 
            {/* fetch the data from te NewUser.js, that is defined inside the Button component */}
        </button>
    );
};

export default Button;