const participantsControllers = require("./participants.controllers");

const getAllParticipants = (req, res) => {
  participantsControllers
    .getAllParticipants()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createParticipant = (req, res) => {
  const userId = req.user.id;
  const { conversationId } = req.body;
  if (conversationId) {
    participantsControllers
      .createParticipant({
        conversationId,
        userId,
      })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    res.status(400).json({
      message: "Missing Data",
      fiels: {
        conversationId: "string",
      },
    });
  }
};
module.exports = {
  createParticipant,
  getAllParticipants,
};
