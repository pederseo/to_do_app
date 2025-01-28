# To-Do List App with MiniReact

This project is a simple To-Do List application built using a custom JavaScript framework called MiniReact.

## Features

- Add tasks to your to-do list.
- Remove tasks from the list.
- Dynamic updates using MiniReact’s state management.

## Installation

1. Clone the repository or download the files.
2. Ensure you have a local server set up or open the HTML file directly in your browser.

## File Structure

```plaintext
project-root/
├── index.html        # Entry point of the application
├── miniReact.js      # Custom framework (MiniReact)
├── app.js            # Application logic
└── styles.css        # Optional: Add custom styles here
```

## Usage

### Running the App

1. Open the `index.html` file in your browser.
2. You will see a simple interface where you can add and remove tasks.

### How It Works

1. **AppStore**
   - Manages the application’s state (`todos`).
   - Notifies subscribers of state changes.

2. **Dispatch Function**
   - Handles `ADD_TODO` and `REMOVE_TODO` actions to update the state.

3. **ToDoApp Component**
   - Dynamically renders the current state of the `todos`.
   - Provides input for adding tasks and buttons for task removal.

### Key Code Snippets

#### Adding a To-Do
```javascript
const addTodo = () => {
  const input = document.getElementById("todoInput");
  if (input.value.trim()) {
    dispatch({ type: "ADD_TODO", payload: input.value.trim() });
    input.value = ""; // Clear the input field
  }
};
```

#### Removing a To-Do
```javascript
const removeTodo = (index) => {
  dispatch({ type: "REMOVE_TODO", payload: index });
};
```

#### Rendering the To-Do List
```javascript
return createElement(
  "ul",
  null,
  ...todos.map((todo, index) =>
    createElement(
      "li",
      { style: "display: flex; justify-content: space-between;" },
      createElement("span", null, todo),
      createElement("button", { onClick: () => removeTodo(index) }, "Eliminar")
    )
  )
);
```

## Development

If you want to customize or extend the application:

1. Modify the `app.js` file to add new features or change the behavior.
2. Update the `miniReact.js` file if you want to enhance the framework.

## Future Improvements

- Add persistent storage using `localStorage`.
- Implement editing tasks.
- Improve the UI with CSS or a design framework.

## License

This project is open-source and available under the [MIT License](LICENSE).

