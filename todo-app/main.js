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

const todoArray = todos.forEach(todo =>
{
    const todoList = document.createElement('p');
    todoList.textContent = todo.text;
    document.querySelector('body').appendChild(todoList);
});

document.querySelector('#new-todo').addEventListener('click', () =>
{
    console.log('adding new todo');
});
