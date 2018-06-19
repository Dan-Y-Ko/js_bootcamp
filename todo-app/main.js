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
    searchText: ''
}

/*const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph =>
{
    if (paragraph.textContent.includes('the'))
    {
        paragraph.remove();
    }
}); */

const incompleteTodos = todos.filter(todo =>
{
    return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

/*const todoArray = todos.forEach(todo =>
{
    const todoList = document.createElement('p');
    todoList.textContent = todo.text;
    document.querySelector('#render-todo').appendChild(todoList);
}); */

document.querySelector('#new-todo').addEventListener('click', () =>
{
    console.log('adding new todo');
});

document.querySelector('#input-todo').addEventListener('input', e =>
{
    filters.searchText = e.target.value;
    renderTodo(todos, filters)
});

const renderTodo = (todos, filters) =>
{
    const filteredTodo = todos.filter(todo =>
    {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#render-todo').innerHTML = '';

    filteredTodo.forEach(todo =>
    {
        const todoList = document.createElement('p');
        todoList.textContent = todo.text;
        document.querySelector('#render-todo').appendChild(todoList); 
    })
};

renderTodo(todos, filters);
