import { getTodos, addTodo, deleteTodo } from "./services";

async function refreshTodos() {
  const todos = await getTodos();

  const tbody = document.querySelector(".todos tbody");
  tbody.innerHTML = "";

  let html = "";
  for (const todo of todos) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${todo.desc}</td>
      <td>${todo.assignee}</td>
      <td><a class="delete" href="#">delete</a></td>`;
    tbody.appendChild(tr);
    const del = tr.querySelector("a.delete");
    del.addEventListener("click", () => deleteClick(todo));
  }
}

async function deleteClick(todo) {
  await deleteTodo(todo);
  refreshTodos();
}

async function addClick() {
  await addTodo(
    document.querySelector("#new-desc-textbox").value,
    document.querySelector("#new-assignee-textbox").value
  );
  refreshTodos();
}

function onLoad() {
  document.querySelector("#add-todo").addEventListener("click", addClick);
  refreshTodos();
}

if (document.readyState !== 'loading') {
  onLoad();
} else {
  document.addEventListener('DOMContentLoaded', onLoad);
}
