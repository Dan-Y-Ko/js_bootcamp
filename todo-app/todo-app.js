const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

const filters =
{
    searchText: '',
    hideCompleted: false
}

/*const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph =>
{
    if (paragraph.textContent.includes('the'))
    {
        paragraph.remove();
    }
}); */

/*const todoArray = todos.forEach(todo =>
{
    const todoList = document.createElement('p');
    todoList.textContent = todo.text;
    document.querySelector('#render-todo').appendChild(todoList);
}); */


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
        todoList.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoList);
    })
};

/*document.querySelector('#new-todo').addEventListener('click', () =>
{
    console.log('adding new todo');
});*/

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', e =>
{
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
});

document.querySelector('#new-todo').addEventListener('submit', e =>
{
    e.preventDefault();

    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });

    renderTodos(todos, filters)

    e.target.elements.text.value= '';
});

document.querySelector('#hide-completed').addEventListener('change', e=>
{
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});