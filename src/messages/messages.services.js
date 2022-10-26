const messagesControllers = require("./messages.controllers");

const getAllMessages = (req, res) => {
  messagesControllers
    .getAllMessages()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createMessage = (req, res) => {
  const senderId = req.user.id;
  const { message, conversationId } = req.body;
  if (message) {
    messagesControllers
      .createMessage({
        senderId,
        conversationId,
        message,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fiels: {
        message: "string",
        conversationId: "uuid",
      },
    });
  }
};

const getOneMessage = (req, res) => {
  const messageId = req.params.id;
  messagesControllers
    .getOneMessage(messageId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const deleteMessage = (req, res) => {
  const messageId = req.params.id;

  messagesControllers
    .deleteMessage(messageId)
    .then(() => {
      res
        .status(200)
        .json({ message: `Your Message was deleted succesfully!` });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllMessages,
  createMessage,
  getOneMessage,
  deleteMessage,
};
