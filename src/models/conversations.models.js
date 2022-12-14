const db = require("../utils/database");
const Users = require("./users.models");
const { DataTypes } = require("sequelize");

const Conversations = db.define("conversations", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_by",
    references: {
      key: "id",
      model: Users,
    },
  },
});

module.exports = Conversations;
