const Messages = require("../models/message.models");
const uuid = require("uuid");

const getAllMessages = async () => {
  const data = Messages.findAll();
  return data;
};

const createMessage = async (data) => {
  const newMessage = await Messages.create({
    id: uuid.v4(),
    senderId: data.senderId,
    conversationId: data.conversationId,
    message: data.message,
  });
  return newMessage;
};

const getOneMessage = async (id) => {
  const data = await Messages.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const deleteMessage = async (id) => {
  const data = await Messages.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllMessages,
  createMessage,
  getOneMessage,
  deleteMessage,
};
