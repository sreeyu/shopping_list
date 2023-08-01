import React from "react";
import style from './List.module.css';
import ListItem from "./ListItem";

function List(props){

    return(
        <ul className={style.list}>
            {props.list.map((item) => 
            <ListItem item={item.item} key={item.id} id={item.id} deleteItem={props.onDelete} />
            )}
        </ul>
    );
};

export default List;