import React, { useState } from "react";
import Form from "./components/shoppingForm/Form";
import List from "./components/shoppingList/List";


function App() {

  const [listItems, setListItems] = useState([]);

  const getListItems = (newItem) =>{
    setListItems(prevItems => {
      const shoppingList = [...prevItems];
      shoppingList.unshift({item: newItem, id: Math.random().toString()})
      return shoppingList;
    });
  };

  const deleteListItem = (itemId) => {
    setListItems(prevItems => {
      const shoppingList = prevItems.filter(item => item.id !== itemId);
      return shoppingList;
    })
  }
  
  return (
    <div className="App">
      <Form inputItem={getListItems} />
      <List list={listItems} onDelete={deleteListItem} />
    </div>
  );
}

export default App;
