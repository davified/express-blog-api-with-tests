const app = require("../../app");
const request = require("supertest");

describe("routes/index", () => {
  it("GET / should return status of 200 and a response body of { message: 'express-blog-api' }", () => {
    return request(app)
      .get("/")

      .expect(200)
      .expect("Content-Type", /json/)
      .expect({ message: "hello express-blog-api" });
  });

  it("the same test using .then()", () => {
    return request(app)
      .get("/")

      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.header["content-type"]).toContain("application/json");
        expect(response.body).toEqual({ message: "hello express-blog-api" });
      });
  });
});
