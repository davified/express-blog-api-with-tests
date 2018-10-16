const express = require("express");
const router = express.Router();

const books = [
  { id: 1, title: "harry potter", summary: "harry survives" },
  { id: 2, title: "lotr", summary: "some summary" }
];

/* GET books listing. */
router.get("/", (req, res, next) => {});

router.get("/:id", (req, res, next) => {});

router.post("/", (req, res, next) => {});

router.put("/:id", (req, res, next) => {});

router.delete("/:id", (req, res, next) => {});

module.exports = router;
