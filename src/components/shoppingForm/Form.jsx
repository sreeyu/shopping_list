import React from "react";
import styles from './Form.module.css';

function Form(){
    return(
        <div className={styles["shopping-form"]}>
            <form >
            <label htmlFor="">Enter your shopping items here</label>
            <input type="text" />
            <button>Add item</button>
        </form>
        </div>
    );
};

export default Form;