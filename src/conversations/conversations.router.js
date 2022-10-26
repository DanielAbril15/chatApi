const router = require("express").Router();
const passport = require("passport");
const {
  getAllConversations,
  createConversations,
  getConversationById,
  patchConversation,
  deleteConversation,
} = require("./conversations.services");
const messageRouter = require("../messages/messages.router");

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllConversations)
  .post(passport.authenticate("jwt", { session: false }), createConversations);

router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getConversationById)
  .delete(passport.authenticate("jwt", { session: false }), deleteConversation)
  .patch(passport.authenticate("jwt", { session: false }), patchConversation);

router.route(`/:id/${messageRouter}`);

module.exports = router;
