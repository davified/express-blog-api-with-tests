# Lab: Create a CRUD API with express

## Getting started
- Fork and clone repo
- Install dependencies: `npm install`
- Start application: `nodemon server.js`

### Assignment

#### Part 1: CRUD
- In `app.js`, define functions to "CRUD" books
  - GET /books
  - GET /books/:id
  - POST /books
  - PUT /books/:id
  - DELETE /books/:id

- Refactor the handler functions into a separate file using `express.Router()`

#### Part 2: 

- Include tests using `jest` and `supertest`