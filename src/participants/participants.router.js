const router = require("express").Router();
const passport = require("passport");
const {
  getAllParticipants,
  createParticipant,
} = require("./participants.services");

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllParticipants)
  .post(passport.authenticate("jwt", { session: false }), createParticipant);

module.exports = router;
