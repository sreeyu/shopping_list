import React, { useState } from "react";
import styles from './Form.module.css';

function Form(){

    const [item, setItem] = useState('');

    const getItem = (event) => {
        setItem(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(item);
        setItem('');
    }
    
    return(
        <div className={styles["shopping-form"]}>
            <form onSubmit={formSubmit} >
            <label id="input-list">Enter your shopping items here</label>
            <input type="text" id="input-list" value={item} onChange={getItem} />
            <button>Add item</button>
        </form>
        </div>
    );
};

export default Form;