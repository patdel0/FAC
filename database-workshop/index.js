const db = require('./database/db.js')
const { createTask, listTasks } = require('./model/tasks.js')

const tasks = db.prepare('SELECT * FROM tasks')

createTask({content: 'Eat a banana', complete: 0})
createTask({content: 'Eat a Strawberry', complete: 0})
// console.log(listTasks())
console.log(tasks)