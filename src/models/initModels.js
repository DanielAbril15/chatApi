const Users = require("./users.models");
const Messages = require("./message.models");
const Conversations = require("./conversations.models");

const initModels = () => {
  Users.hasMany(Conversations);
  Users.hasMany(Messages);
  Conversations.hasMany(Messages);
  Messages.belongsTo(Conversations);
};

module.exports = initModels;
