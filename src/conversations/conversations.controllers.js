const Conversations = require("../models/conversations.models");
const uuid = require("uuid");

const getAllConversations = async () => {
  const data = Conversations.findAll();
  return data;
};
const createConversations = async (data) => {
  const newConversation = await Conversations.create({
    id: uuid.v4(),
    title: data.title,
    userId: data.userId,
  });
  return newConversation;
};

const getConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id: id,
    },
  });
  return data;
};
const updateConversation = async (id, data) => {
  const result = await Conversations.update(data, {
    where: {
      id: id,
    },
  });
  return result;
};
const deleteConversation = async (id) => {
  const data = await Conversations.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  getAllConversations,
  createConversations,
  getConversationById,
  updateConversation,
  deleteConversation,
};
