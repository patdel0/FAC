const server = require("./server.js");
const db = require('./database/db.js')
const { createTask, listTasks, removeTask } = require('./model/tasks.js')


const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

