const db = require('./database/db.js')
const { createTask, listTasks } = require('./model/tasks.js')

console.log(listTasks())