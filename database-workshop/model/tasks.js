const db = require('../database/db.js')

const insert_task = db.prepare('INSERT INTO tasks (content) VALUES (?)')

function createTask(content) {
  insert_task.run(content)
}

module.exports = { createTask }
