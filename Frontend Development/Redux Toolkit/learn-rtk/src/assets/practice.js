
const todos = [
    { id: 1, title: 'Buy Milk', done: false },
    { id: 2, title: "Clean room", done: true },
    { id: 3, title: "Study Redux", done: false }
]

const pendingTodos = todos.filter((t) => {
    return t.done === false
})
console.log(pendingTodos);



