const router = require("express").Router();
const headlinesController = require("../../controllers/headlinesController");

// To match with "/api/headlines"
router.route("/")
  .get(headlinesController.findAll)
  .post(headlinesController.create);

// To match with "/api/headlines/:id"
router.route("/:id")
  .get(headlinesController.findById)
  .put(headlinesController.update)
  .delete(headlinesController.remove);

module.exports = router;