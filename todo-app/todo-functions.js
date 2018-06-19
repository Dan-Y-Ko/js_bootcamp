// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
};

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
};

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(todo => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(todo => {
        const todoList = document.createElement('p');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        todoList.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoList);
        todoList.appendChild(deleteButton);
    })
};

const saveTodos = todos =>
{
    localStorage.setItem('todos', JSON.stringify(todos))
};