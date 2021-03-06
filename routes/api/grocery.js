const router = require("express").Router();
const groceryController = require("../../controllers/groceryController");

// Matches with "/api/grocery"
router.route("/")
    .get(groceryController.findAll)
    .post(groceryController.create);

// Matches with "/api/grocery/:category"
router.route("/:category")
    .get(groceryController.findByCategory)

// Matches with "/api/grocery/:id"
router.route("/:id")
    .delete(groceryController.deleteItem)

module.exports = router;