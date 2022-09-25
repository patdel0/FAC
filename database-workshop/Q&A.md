# Questions and Issues

### Questions
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

### Issues

<details>
  <summary>db.prepare is not a function</summary>
  
```js
createTask("Eat a banana");
const tasks = db.prepare("SELECT * FROM tasks").all(); 
console.log(tasks);
```
</details 



<!-- TEMPLATE -->
<!-- 
<details>
  <summary></summary>
```js
```
</details 
-->
