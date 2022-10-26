const conversationsControllers = require("./conversations.controllers");
const participantsControllers = require("../participants/participants.controllers");

const getAllConversations = (req, res) => {
  conversationsControllers
    .getAllConversations()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};
const createConversations = (req, res) => {
  const createdBy = req.user.id;
  const { title, phone } = req.body;
  if ((title, phone)) {
    conversationsControllers
      .createConversations({ title, createdBy })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "Missing data",
      fields: {
        title: "string",
        phone: "string",
      },
    });
  }
};

const getConversationById = (req, res) => {
  const conversationId = req.params.id;

  conversationsControllers
    .getConversationById(conversationId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const patchConversation = (req, res) => {
  const conversationId = req.params.id;
  const { title } = req.body;
  conversationsControllers
    .updateConversation(conversationId, { title })
    .then(() => {
      res
        .status(200)
        .json({ message: "Your title conversation was edited succesfully!" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteConversation = (req, res) => {
  const conversationId = req.params.id;

  conversationsControllers
    .deleteConversation(conversationId)
    .then(() => {
      res
        .status(200)
        .json({ message: `Your conversation was deleted succesfully!` });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllConversations,
  createConversations,
  getConversationById,
  patchConversation,
  deleteConversation,
};
