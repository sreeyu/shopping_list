import React from "react";
import Form from "./components/shoppingForm/Form";
import List from "./components/shoppingList/List";

const DUMMY_LIST = [
  {item: 'tomato', id:'i1'},
  {item: 'potato', id:'i2'}
]

function App() {
  return (
    <div className="App">
      <Form />
      <List list={DUMMY_LIST} />
    </div>
  );
}

export default App;
