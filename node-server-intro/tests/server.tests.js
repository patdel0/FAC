const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");

test("home route / returns expected page", async () => {
  const app = server.listen(1987);
  const response = await fetch("http://localhost:1987");
  app.close();

  assert.equal(response.status, 200);

  const body = await response.text();
  assert.equal(/hello/i.test(body), true);
});

test("/uh-oh page returns status 500", async () => {
  const app = server.listen(1989);
  const response = await fetch("http://localhost:1989/uh-oh");
  app.close();

  assert.equal(response.status, 500);

  const body = await response.text();
  assert.equal(body, "something went wrong");
});

test("/search returns message including keyword", async () => {
  const app = server.listen(1989);
  const response = await fetch("http://localhost:1989/search?keyword=bananas");
  app.close();

  assert.equal(response.status, 200);

  const body = await response.text();
  assert.match(body, /You searched for bananas/);
});

test("missing route returns 404 page", async () => {
  const app = server.listen(1989);
  const response = await fetch("http://localhost:1989/asdfasd");
  app.close();

  assert.equal(response.status, 404);

  const body = await response.text();
  assert.match(body, /not found/i);
});

test("/submit route responds to POST requests", async () => {
  const app = server.listen(1989);
  const response = await fetch("http://localhost:1989/submit", {
    method: "POST",
  });
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /thanks for submitting/);
});
