const router = require("express").Router();
const groceryController = require("../../controllers/groceryController");

// Matches with "/api/grocery"
router.route("/")
    .get(groceryController.findAll)
//   .post(booksController.create);

// Matches with "/api/grocery/:category"
router.route("/:category")
    .get(groceryController.findByCategory)
// .put(groceryController.update)
// .delete(groceryController.remove);

router.route("/:id")
    .delete(groceryController.deleteItem)



module.exports = router;