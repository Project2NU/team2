const router = require("express").Router();
const { User, Book } = require("../../models");

// router.get("/test", (req, res) => {
//   res.send("hello");
// });

router.get("/:bookId", async (req, res) => {
  let book = await Book.findOne({
    where: { id: req.params.bookId },
  });
  //get book with this id
  res.send(JSON.stringify(book));
});

router.get("/", async (req, res) => {
  let allBook = await Book.findAll();
  //delete text from below
  res.send(`you are getting all books ${JSON.stringify(allBook)}`);
});

router.post("/", async (req, res) => {
  //   console.log(req.body);
  const newBook = await Book.create(req.body);
  res.send(`you just created a book ${JSON.stringify(newBook)}`);
});

router.put("/:bookId", (req, res) => {
  res.send(`you edit a book ${JSON.stringify(req.body)}`);
});

router.delete("/:bookId", (req, res) => {
  res.send(`you deleted a book ${req.params.bookId}`);
});

module.exports = router;
