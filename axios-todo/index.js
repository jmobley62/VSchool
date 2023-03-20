// ---Create GET request---
// const getUsers = () => {
//   axios
//     .get("https://api.vschool.io/jaquanmobley/todo/")
//     .then((response) => {
//       for (let i = 0; i < response.data.length; i++) {
//         const h1 = document.createElement("h1");
//         h1.textContent = response.data[i].title;
//         document.body.appendChild(h1);

//         const h2 = document.createElement("h2");
//         h2.textContent = response.data[i].description;
//         document.body.appendChild(h2);

//         const h3 = document.createElement("h3");
//         h3.textContent = response.data[i].imgUrl;
//         document.body.appendChild(h3);
//       }
//     })
//     .catch((error) => console.error(error));
// };

// getUsers();

// ---Do a POST request---

// const newTodo = {
//   title: "My 4th Todo",
//   description: "My 4th Description",
//   imgUrl:
//     "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
// };

// const postTodo = () => {
//   axios
//     .post("https://api.vschool.io/jaquanmobley/todo", newTodo)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.error(error));
// };

// postTodo();

// ---Do a PUT request---
// const updateTodo = {
//   title: "My 2nd Todo",
//   description: "My 2nd Description",
//   imgUrl:
//     "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
// };

// const putTodo = () => {
//   axios
//     .put(
//       "https://api.vschool.io/jaquanmobley/todo/641192125d714865d31d624f",
//       updateTodo
//     )
//     .then((response) => console.log(response.data))
//     .catch((error) => console.error(error));
// };

// putTodo();

// ---Do a DELETE request---

// axios
//   .delete("https://api.vschool.io/jaquanmobley/todo/<id>")
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));

// ---Capstone Project---

// ===Part 1===
const form = document.myForm;
const todoList = document.getElementById("todoList");

// ------------------------------------------------------------------------------------------------------------------------
// - The user can see their current list of todos.

function getUsers() {
  axios
    .get("https://api.vschool.io/jaquanmobley/todo/")
    .then((response) => showTodos(response.data))
    .catch((error) => console.error(error));
}

// - Todos show up as soon as the page loads.

function showTodos(data) {
  todoList.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const h3 = document.createElement("h3");
    h3.textContent = data[i].title;
    todoList.appendChild(h3);
  }
}

getUsers();

// - If a todo item is complete, it should have a strikethrough line on it

// - Images should be displayed as images if there are any

// ===Part 2===
// ------------------------------------------------------------------------------------------------------------------------
// - The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTodo = {
    title: form.title.value,
    price: form.price.value,
    description: form.description.value,
  };

  form.title.value = "";
  form.price.value = "";
  form.description.value = "";

  axios
    .post("https://api.vschool.io/jaquanmobley/todo", newTodo)
    .then((response) => getUsers())
    .catch((error) => console.log(error));
});

// - A user should be able to give the item a title.

// - A user should be able to give the item a price.

// - A user should be able to give the item a description.

// - A user should be able to attach an imgUrl to the item

// ===Part 3===
// ------------------------------------------------------------------------------------------------------------------------
// - Each todo will have a checkbox where it can be marked complete or incomplete

// - Checking the checkbox should update the database

// ===Part 4===
// ------------------------------------------------------------------------------------------------------------------------
// - A user will be able to delete todos (this is different from marking a todo as "completed")

// - Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
