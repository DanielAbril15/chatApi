const router = require("express").Router();
const passport = require("passport");
const {
  getAllMessages,
  getOneMessage,
  createMessage,
  deleteMessage,
} = require("./messages.services");

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllMessages)
  .post(passport.authenticate("jwt", { session: false }), createMessage);

router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getOneMessage)
  .delete(passport.authenticate("jwt", { session: false }), deleteMessage);

module.exports = router;
