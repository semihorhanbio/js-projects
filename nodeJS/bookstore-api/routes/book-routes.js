const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  updateBook,
  deleteBook,
  addNewBook,
} = require("../controllers/book-controller");

//create express router
const router = express.Router();

//all routes that are related to books only
router.get("/books", getAllBooks);
router.get("/books/:id", getSingleBookById);
router.post("/books", addNewBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
