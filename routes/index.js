const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({ message: "hello express!" });
});

module.exports = router;
