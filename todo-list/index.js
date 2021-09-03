let todos = [];
const todoItemDiv = document.querySelector("#todo-item-list");
const inputText = document.querySelector("#todo-item");

function addTodo(todo) {
  todos.push(todo);
  inputText.value = "";
  renderList();
}

function deleteTodo(todoId) {
  const newTodos = todos.filter((todo) => {
    return todo.id !== todoId;
  });
  todos = newTodos;
  renderList();
}

function renderList() {
  todoItemDiv.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");

    li.innerHTML = `
    <span id="${todo.id}">${todo.text}</span>
    <button data-id=${todo.id} class="delete">Delete</button>`;

    todoItemDiv.appendChild(li);
  }
}

function handleClick(e) {
  console.log(e.target.className);
  if (e.target.className === "delete") {
    const todoId = Number(e.target.dataset.id);
    deleteTodo(todoId);
  }
}

function initialize() {
  document.addEventListener("click", handleClick);
  document.addEventListener("keyup", function (e) {
    const text = e.target.value;
    if (e.key === "Enter") {
      todo = {
        text: text,
        id: Date.now(),
        done: false,
      };

      addTodo(todo);
    }
  });

  renderList();
}

initialize();
