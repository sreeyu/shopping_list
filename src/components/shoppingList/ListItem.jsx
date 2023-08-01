import React from "react";
import styles from './ListItem.module.css';

function ListItem(props){

    const getItemId = (event) => {
        props.deleteItem(event.target.id);
    }

    return(
        <li className={styles.item}  >
            <h3>{props.item}</h3>
            <button id={props.id} onClick={getItemId} >Delete</button>
        </li>
    );
};

export default ListItem;