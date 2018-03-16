const app = require("../../app");
const request = require("supertest");

describe("routes/books", () => {
  it("GET /books should return a list of books", () => {
    return request(app)
      .get("/books")

      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body.message).toEqual("GET /books succeeded");
        expect(Array.isArray(response.body.books)).toBe(true);
      });
  });

  it("POST /books should successfully create a book", () => {
    requestBody = { title: "book 1", summary: "some summary of book 1" };

    return request(app)
      .post("/books")
      .send(requestBody)

      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body.message).toEqual("GET /books succeeded");
        expect(response.body.book.title).toEqual(requestBody.title);
        expect(response.body.book.summary).toEqual(requestBody.summary);
      });
  });

  it("PUT /books/:id should successfully create a book", () => {
    requestBody = { title: "book 1", summary: "some summary of book 1" };

    return request(app)
      .post("/books")
      .send(requestBody)

      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body.message).toEqual("GET /books succeeded");
        expect(response.body.book.title).toEqual(requestBody.title);
        expect(response.body.book.summary).toEqual(requestBody.summary);
      });
  });
});
