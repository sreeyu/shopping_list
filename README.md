# shopping_list
The Shopping List App is a simple web application built using React that allows users to create and manage their shopping lists. Users can add items to the list, and they also have the option to delete items when they are no longer needed.

## Features
- Add items to the shopping list.
- Delete items from the shopping list.
- User-friendly interface.
- Responsive design for various screen sizes.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- useState: React hook for managing state within functional components.
- CSS Modules: For styling components with modular CSS.
- Math.random: Used to generate unique IDs for list items.

## Getting started
To use Shopping List App, visit the application's website at https://sreeyu.github.io/shopping_list/. The website is accessible from any modern web browser.

## Usage
1. Adding Items:

  - Users can enter shopping items in the input field provided.
  - Upon clicking the "Add item" button, the entered item is added to the top of the shopping list.
  - The new item is displayed with a "Delete" button.

2. Deleting Items:

  - Each item in the shopping list is accompanied by a "Delete" button.
  - Clicking the "Delete" button removes the corresponding item from the list.

3. Styling and User Interface:

  - The application features a clean and user-friendly interface.
  - Styling is implemented using CSS Modules, allowing for a modular and organized approach to styling components.
  - The design is responsive and adapts to different screen sizes.

# Poject Notes

## Updating list with useState
In React, you can use the `useState` hook to manage and update lists in your components. The `useState` hook allows you to maintain a piece of state, which can be an array, and provides a way to update it while ensuring that the componet re-renders appropriately.

Here's a brief description of how to update a list using the `useState` hook in React:

1. **Initializing State:**
You can initialize the list state using the `useState` hook. For example:
```jsx
const [listItems, setListItems] = useState([]);
```
2. **Updating State:** To update the list, you use the `setItems` function provided by the `useState` hook. When updating a list, it's important to create a new array that represents the updated list while keeping the original state immutable. You can achieve this using methods like `concat`, `slice`, `map`, or the spread operator (`...`).
```jsx
const addItem = (newItem) => {
    setListItems(prevItems => [...prevItems, newItem]);
};

const removeItem = (itemId) => {
    setListItems(prevItems => prevItems.filter(item => item.id !== itemId));
};
```
In the example above, `addItem` uses the spread operator to add a new item to the list, while `removeItem` uses the `filter` method to create a new array excluding the item with the specified `itemId`.

3. **Rendering the List:** In your JSX, you can map over the `listItems` array to render each item. When rendering, make sure to provide a unique `key` for each item to help React efficiently update the virtual DOM.
```jsx
<ul>
  {listItems.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```
By using the `useState` hook to manage your list state and update it immutably, you can ensure that your component behaves correctly and efficiently when dealing with lists in React.

## onSubmit event handler
The `onSubmit` event handler is a fundamental part of handling forms in HTML and React. It's used to capture and handle the submission of a form when a user clicks the "submit" button or presses the Enter key while focused on an input field. In React, the `onSubmit` event is commonly used to perform actions such as data validation, sending data to a server, and updating the application's state. 

Here's a v+brief description of how the `onSubmit` event handler works:

1. **Form Element:** The `onSubmit` event is associated with the `<form>` element. When a user submits a form, the event is triggered.
2. **Event Handling:** In React, you attach the `onSubmit` event handler to a form element as a prop. This handler is a function that will be executed when the form is submitted.
3. **Preventing Default Behaviour:** By default, when a form is submitted, the browser will attempt to refrest the page. To prevent this default behaviour and handle the submission within your React component, you need to call the `event.preventDefault()` method within the `onSubmit` handler.
4. **Handling Submission:** Inside the `onSubmit` handler function, you can perform various actions, such as validating user input, making API requests, updating the component's state, or navigating to another page. This is where you define the logic for what happens when the user submits the form.
5. **Usage in React:** In a React component, you typically define the `onSubmit` event handler as a function, and then assign it to the `onSubmit` attribute of the `<form>` element.

The `onSubmit` event handler is a powerful tool for managing form submissions in a controlled manner. It allows you to control the behaviour of the form, validate input data, and trigger actions based on user interations, all while keeping the user experience smooth and interactive.