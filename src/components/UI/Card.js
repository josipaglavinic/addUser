import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
}; 
//we access the Card propreties in NewUser by props.children

export default Card;