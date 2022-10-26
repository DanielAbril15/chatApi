const Users = require("./users.models");
const Messages = require("./message.models");
const Conversations = require("./conversations.models");
const Participants = require("./participants.models");

const initModels = () => {
  Users.hasMany(Conversations);
  Users.hasMany(Messages);
  Conversations.hasMany(Messages);
  Messages.belongsTo(Conversations);
  Conversations.hasMany(Participants);
};

module.exports = initModels;
