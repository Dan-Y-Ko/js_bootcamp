let todos = getSavedTodos();

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
renderTodos(todos, filters);

/*document.querySelector('#new-todo').addEventListener('click', () =>
{
    console.log('adding new todo');
});*/

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

    saveTodos(todos);
    renderTodos(todos, filters)

    e.target.elements.text.value= '';
});

document.querySelector('#hide-completed').addEventListener('change', e=>
{
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});