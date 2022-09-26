# Questions and Issues

## Questions

<details >
    <summary>node:path.join('directory', 'file_name.sql') !== 'directory/file_name.sql' ?</summary>

```js
const schemaPath = join('database', 'schema.sql')
const schema = readFileSync(schemaPath, 'utf-8')
db.exec(schema)
```

</details>

<details >
  <summary>node:fs.readFileSync ?</summary>

```js
const { readFileSync } = require('node:fs')
```

  </details>

<details >
    <summary>sqlite_sequence?</summary>

```js
function reset() {
  db.exec(/*sql*/ `
    DELETE FROM tasks;
    DELETE FROM sqlite_sequence WHERE name='tasks';
  `)
}
```

</details>

## Issues

<details>
  <summary>createTask snippet not running</summary>

```js
createTask('Eat a banana')
const tasks = db.prepare('SELECT * FROM tasks').all()
console.log(tasks)
```

### Explanation

The issue was ocurring because createTasks wasn't being initialized/imported in `db.js`, which was the file being run in the node command provided. `node database/db.js`

### Solution

Do one of these:

- Import createTasks after db has been exported in `db.js`
- Change the node command to run `node model/tasks.js`.
- Create an `index.js` file in the root folder with the following code and run `node index.js`

```js
//index.js
const db = require('./database/db.js')
const { createTask } = require('./model/tasks.js')
```

</details>

<details>
  <summary>db.prepare is not a function</summary>

### Explanation

createTasks was being imported and initialized before the db creation in `db.js`. An empty object was being returned by db.

### Solution

Do one of these:

- Import createTasks after db has been exported in `db.js`
- Change the node command to run `node model/tasks.js`.
- Create an `index.js` file in the root folder with the following code and run `node index.js`

```js
//index.js
const db = require('./database/db.js')
const { createTask } = require('./model/tasks.js')
```

</details>

<details>
  <summary>listTasks() is displaying an empty array</summary>

### Explanation

When running the `seed.js` file, we are creating a file named 'db.sqlite'. However when running the function provided `listTasks()` an empty array is returned.

This is due to the fact that when we run `node database/db.js` or `node model/tasks.js`, we are not providing the DB_FILE name before execution.

### Solution

Provide the database file name before executing the node command:
`DB_FILE=db.sqlite node database/db.js`
or
`DB_FILE=db.sqlite node model/tasks.js`, depending on which file you are writing the execution code.

You can also create a script in your `package.json` file to make it easier to run next time:

```json
// package.json
{
  "dependencies": {
    "better-sqlite3": "^7.6.2"
  },
  "scripts": {
    "seed": "DB_FILE=db.sqlite node database/seed.js",
    "start": "DB_FILE=db.sqlite node model/tasks.js"
  }
}
```

Now `npm start` can be used to run the file you chose

</details>

<details>
  <summary>Test - model.removeTask is not a function</summary>

### Explanation

The test is expecting `removeTask()` to be returned from the `tasks.js` file.

### Solution

Export all functions expected in the test from `tasks.js` by adding this snippet to the bottom of the file:

```js
// tasks.js
...
module.exports = { createTask, removeTask, listTasks, editTask };
```

</details>

<!-- TEMPLATE -->
<!--
<details>
  <summary></summary>
```js
```
</details>
-->
