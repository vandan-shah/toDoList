// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', removeList);

// FUNCTIONS
function addTodo(event) {

    event.preventDefault();

    // div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Delete Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}
    // DELETE
    function removeList(e) {
    const item = e.target;

    if(item.classList[0] === 'trash-btn') {
        const trash = item.parentElement;
        trash.remove();
    }
}