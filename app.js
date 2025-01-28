import miniReact from './miniReact.js';

const { AppStore, dispatch, createElement, render } = miniReact;

// --- Estado inicial ---
AppStore.setState({ todos: [] });

// --- Componente: ToDoApp ---
function ToDoApp() {
  const { todos } = AppStore.getState();

  // Evento para agregar un To-Do
  const addTodo = () => {
    const input = document.getElementById("todoInput");
    if (input.value.trim()) {
      dispatch({ type: "ADD_TODO", payload: input.value.trim() });
      input.value = ""; // Limpiar el campo
    }
  };

  // Evento para eliminar un To-Do
  const removeTodo = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  // Render del componente
  return createElement(
    "div",
    { style: "font-family: Arial; max-width: 400px; margin: auto; text-align: center;" },
    createElement("h1", null, "To-Do List"),
    createElement(
      "div",
      null,
      createElement("input", { id: "todoInput", placeholder: "Escribe una tarea..." }),
      createElement(
        "button",
        { onClick: addTodo, style: "margin-left: 10px;" },
        "Agregar"
      )
    ),
    createElement(
      "ul",
      null,
      ...todos.map((todo, index) =>
        createElement(
          "li",
          {
            style: "margin: 5px 0; display: flex; justify-content: space-between; align-items: center;"
          },
          createElement("span", null, todo),
          createElement(
            "button",
            {
              onClick: () => removeTodo(index),
              style: "background: red; color: white; border: none; padding: 5px;"
            },
            "Eliminar"
          )
        )
      )
    )
  );
}

// --- Reducer para manejar las acciones ---
AppStore.subscribe(() => {
  const currentState = AppStore.getState();
  if (!currentState.todos) {
    AppStore.setState({ todos: [] });
  }
});

// --- Configuración de dispatch ---
miniReact.dispatch = (action) => {
  const { todos } = AppStore.getState();
  switch (action.type) {
    case "ADD_TODO":
      AppStore.setState({ todos: [...todos, action.payload] });
      break;
    case "REMOVE_TODO":
      AppStore.setState({ todos: todos.filter((_, idx) => idx !== action.payload) });
      break;
    default:
      console.warn("Acción desconocida:", action);
  }
};

// --- Inicializar aplicación ---
const root = document.getElementById("root");

AppStore.subscribe(() => render(ToDoApp(), root));
render(ToDoApp(), root);
