const Participants = require("../models/participants.models");
const uuid = require("uuid");

const getAllParticipants = async () => {
  const data = Participants.findAll();
  return data;
};
const createParticipant = async (data) => {
  const newParticipant = await Participants.create({
    id: uuid.v4(),
    conversationId: data.conversationId,
    userPhone: data.userPhone,
  });
  return newParticipant;
};

module.exports = {
  createParticipant,
  getAllParticipants,
};
