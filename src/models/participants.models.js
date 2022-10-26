const db = require("../utils/database");
const Users = require("./users.models");
const Conversations = require("./conversations.models");
const { DataTypes } = require("sequelize");

const Participants = db.define("participants", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  conversationId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "conversation_id",
    references: {
      key: "id",
      model: Conversations,
    },
  },
  userPhone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "user_phone",
    references: {
      key: "phone",
      model: Users,
    },
  },
});

module.exports = Participants;
