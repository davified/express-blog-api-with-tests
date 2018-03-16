const express = require("express");
const router = express.Router();

const books = [
  { id: 1, title: "harry potter", summary: "harry survives" },
  { id: 2, title: "lotr", summary: "some summary" }
];

/* GET books listing. */
router.get("/", (req, res, next) => {
  res.json({ message: "GET /books succeeded", books: books });
});

router.get("/:id", (req, res, next) => {
  res.json({ message: `get book with id ${req.params.id}` });
});

router.post("/", (req, res, next) => {
  const { title, summary } = req.body;
  newBook = { id: books.length + 1, title, summary };
  books.push(newBook);

  res.json({ message: `GET /books succeeded`, book: newBook });
});

router.put("/:id", (req, res, next) => {
  res.json({ message: `update book with id ${req.params.id}` });
});

router.delete("/:id", (req, res, next) => {
  res.json({ message: `delete book with id ${req.params.id}` });
});

module.exports = router;
