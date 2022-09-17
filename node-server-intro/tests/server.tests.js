const test = require('node:test')
const assert = require('node:assert')
const server = require('../server.js')

test('home route returns expected page', async () => {
  const app = server.listen(1987)
  const response = await fetch('http://localhost:1987')
  app.close()

  assert.equal(response.status, 200)

  const body = await response.text()
  assert.equal(body, 'hello')
})

test('uh-oh page returns status 500', async () => {
  const app = server.listen(1989)
  const response = await fetch('http:localhost:1989/uh-oh')
  app.close()

  assert.equal(response.status, 500)

  const body = await response.text()
  assert.equal(body, 'something went wrong')
})
