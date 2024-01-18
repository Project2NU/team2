const router = require("express").Router();
const { User } = require("../../models");

// router.get("/test", (req, res) => {
//   res.send("hello");
// });

router.get("/:bookId", (req, res) => {
  res.send(`you are getting book ${req.params.bookId}`);
});

router.get("/", (req, res) => {
  res.send(`you are getting all books`);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(`you just created a book ${JSON.stringify(req.body)}`);
});

router.put("/:bookId", (req, res) => {
  res.send(`you edit a book ${JSON.stringify(req.body)}`);
});

router.delete("/:bookId", (req, res) => {
  res.send(`you deleted a book ${req.params.bookId}`);
});

module.exports = router;
