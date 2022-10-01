const db = require('../database/db.js')
const server = require('../server.js')

// Create
const insert_task = db.prepare(/*sql*/ `
  INSERT INTO tasks (content, complete)
  VALUES ($content, $complete)
  RETURNING id, content, created_at
`)

function createTask(task) {
  return insert_task.get(task)
}

server.post('/',)

// Select
const select_tasks = db.prepare(/*sql*/ `
  SELECT
    id,
    content,
    TIME(created_at) AS created_at,
    complete
  FROM tasks
`)

function listTasks() {
  return select_tasks.all()
}

// Delete
const delete_task = db.prepare(/*sql*/ `
  DELETE FROM tasks WHERE id = ?
`)

function removeTask(id) {
  delete_task.run(id)
  console.log(`Removed item with id:${id} succesfully`)
}

// Update
const update_content = db.prepare(/*sql*/ `
  UPDATE tasks
  SET content = $content
  WHERE id = $id
  RETURNING id, content, created_at, complete
`)

function editTask(task) {
  console.log('edited')
  return update_content.get(task)
}

// Update Complete

const update_complete = db.prepare(/*sql*/ `
  UPDATE tasks
  SET complete = NOT complete
  WHERE id = ?
  RETURNING id, content, created_at, complete
`)

function toggleTask(id) {
  return update_complete.get(id)
}

module.exports = { createTask, listTasks, removeTask, editTask, toggleTask }
