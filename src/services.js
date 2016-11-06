const db = [];
db.todos = [
  { desc: "Get Milk", assignee: "me" },
  { desc: "Buy Eggs", assignee: "me" }
];

export async function getTodos() {
  return db.todos;
}

export async function getMyTodos() {
  return db.todos.filter(t => t.assignee === "me");
}

export async function addTodo(desc, assignee) {
  db.todos = db.todos.concat({ desc, assignee });
}

export async function updateTodo(desc, assignee, newDesc) {
  const todo = db.todos.find(todo => todo.desc === desc && todo.assignee === assignee);
  todo.desc = newDesc;
}

export async function deleteTodo(deleted) {
  db.todos = db.todos.filter(todo => todo.desc !== deleted.desc || todo.assignee !== deleted.assignee)
}
