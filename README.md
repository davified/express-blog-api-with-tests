# Lab: Create a CRUD API with express

## Getting started

- Fork and clone repo
- Install dependencies: `npm install`
- Start application: `nodemon server.js`

## Assignment

### Part 1: Implement the API

- In `app.js`, define functions to "CRUD" books
  - GET /books
  - GET /books/:id
  - POST /books
  - PUT /books/:id
  - DELETE /books/:id

- Refactor the handler functions into a separate file using `express.Router()`

### Part 2: Write tests for the book API

- `jest` and `supertest` are already specified in the `package.json` and installed when you run `npm install`.
- Some of the test cases are already written in `tests/integration-tests/books.test.js`. You need to complete those test cases based on the description.