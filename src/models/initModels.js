const Users = require("./users.models");
const Messages = require("./message.models");
const Conversations = require("./conversations.models");
const Participants = require("./participants.models");

const initModels = () => {
  Users.hasMany(Messages);
  Messages.belongsTo(Users);

  Conversations.hasMany(Messages);
  Messages.belongsTo(Conversations);

  Users.hasMany(Participants);
  Participants.belongsTo(Users);

  Conversations.hasMany(Participants);
  Participants.belongsTo(Conversations);
};

module.exports = initModels;
