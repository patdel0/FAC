const db = require('../database/db.js')

const insert_task = db.prepare(/*sql*/`
  INSERT INTO tasks (content, complete)
  VALUES ($content, $complete)
  RETURNING id, content, created_at
`);

const select_tasks = db.prepare(/*sql*/ `
  SELECT
    id,
    content,
    TIME(created_at),
    complete
  FROM tasks
`);

function createTask(task) {
  return insert_task.get(task);
}

function listTasks() {
  return select_tasks.all();
}


module.exports = { createTask, listTasks }
