const db = require('./database/db.js')
const { createTask, listTasks, removeTask } = require('./model/tasks.js')

removeTask(4)
