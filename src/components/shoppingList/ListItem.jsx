import React from "react";
import styles from './ListItem.module.css';

function ListItem(props){

    return(
        <li className={styles.item}>{props.item}</li>
    );
};

export default ListItem;