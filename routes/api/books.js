const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// same as "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// same as "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;