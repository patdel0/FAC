const db = require('./database/db.js')
const { createTask } = require('./model/tasks.js')

createTask('Eat a banana')
const tasks = db.prepare('SELECT * FROM tasks').all()
console.log(tasks)
