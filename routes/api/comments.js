const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// to match with "/api/comments/"
router.route("/")
  .get(commentController.findAll)
  .post(commentController.create);
  
  // To match comments with article id with "/api/comments/:id"
router.route("/:id")
  .get(commentController.findById)
  .put(commentController.update)
  .delete(commentController.remove);

module.exports = router;