const router = require("express").Router();
const groceryController = require("../../controllers/groceryController");

// Matches with "/api/grocery"
router.route("/")
    .get(groceryController.findAll)
//   .post(booksController.create);

// Matches with "/api/grocery/:id"
router.route("/:id")
// .get(groceryController.findById)
// .put(groceryController.update)
// .delete(groceryController.remove);

module.exports = router;