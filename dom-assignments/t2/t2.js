// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here




// haetaan ul elementti
const ul = document.querySelector('ul');

// käydään lista läpi
todoList.forEach(item => {
  // luodaan li
  const li = document.createElement("li");

  // luodaan input
  const input = document.createElement("input");
  input.type = "checkbox"; 
  input.id = `todo-${item.id}`;
  input.checked = item.completed;

  // luodaan label
  const label = document.createElement("label");
  label.htmlFor = `todo-${item.id}`; // yhdistää labelin oikeaan checkboxiin
  label.textContent = item.task;     // tekstiksi tulee tehtävän nimi

  // lisätään input ja label li-elementtiin
  li.appendChild(input);
  li.appendChild(label);

  // lisätään li ul-listaan
  ul.appendChild(li);
});
