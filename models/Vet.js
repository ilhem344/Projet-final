const mongoose = require("mongoose");
const schema = mongoose.Schema;
const VetSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  parcoursAcademique: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vet", VetSchema);
