import React, { useState } from "react";
import Form from "./components/shoppingForm/Form";
import List from "./components/shoppingList/List";

const DUMMY_LIST = [
  {item: 'tomato', id:'i1'},
  {item: 'potato', id:'i2'}
]

function App() {

  const [listItems, setListItems] = useState(DUMMY_LIST);

  const getListItems = (newItem) =>{
    setListItems(prevItems => {
      const shoppingList = [...prevItems];
      shoppingList.unshift({item: newItem, id: Math.random().toString()})
      return shoppingList;
    })
  }
  
  return (
    <div className="App">
      <Form inputItem={getListItems} />
      <List list={listItems} />
    </div>
  );
}

export default App;
