const db = require('../database/db.js')


// Create
const insert_task = db.prepare(/*sql*/`
  INSERT INTO tasks (content, complete)
  VALUES ($content, $complete)
  RETURNING id, content, created_at
`);

function createTask(task) {
  return insert_task.get(task);
}


// Select
const select_tasks = db.prepare(/*sql*/ `
  SELECT
    id,
    content,
    TIME(created_at) AS created_at,
    complete
  FROM tasks
`);

function listTasks() {
  return select_tasks.all();
}


// Delete
const delete_task = db.prepare(/*sql*/ `
  DELETE FROM tasks WHERE id = ?
`);

function removeTask(id) {
  delete_task.run(id);
  console.log(`Removed item with id:${id} succesfully`)
}

// Update
const update_content = db.prepare(/*sql*/ `
  UPDATE tasks
  SET content = $content
  WHERE id = $id
  RETURNING id, content, created_at, complete
`);

function editTask(task) {
  return update_content.get(task);
}

module.exports = { createTask, listTasks, removeTask, editTask }
