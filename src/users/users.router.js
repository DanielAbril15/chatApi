const router = require("express").Router();

const userServices = require("./users.services");

router.get("/", userServices.getAllUser);

router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(userServices.patchUser)
  .delete(userServices.deleteUser);

module.exports = router;
