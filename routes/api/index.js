const router = require("express").Router();
const groceryRoutes = require("./grocery");

// Grocery routes
router.use("/grocery", groceryRoutes);

module.exports = router;