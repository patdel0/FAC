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

Either import createTasks after db has been exported in `db.js` or change the node command to run `node model/tasks.js`.

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
    
</details

<!-- TEMPLATE -->
<!--
<details>
  <summary></summary>
```js
```
</details>
-->
