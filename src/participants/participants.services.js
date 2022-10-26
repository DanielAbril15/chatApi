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
  const conversationId = req.params;
  const { phone } = req.body;
  if (phone) {
    participantsControllers
      .createParticipant({
        conversationId,
        phone,
      })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.data(400).json({ message: err.message }));
  } else {
    res.status(400).json({
      message: "Missing Data",
      fiels: {
        phone: "string",
      },
    });
  }
};
module.exports = {
  createParticipant,
  getAllParticipants,
};
