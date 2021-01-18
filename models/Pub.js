const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const PubSchema = new schema({
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
  adresse: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
    default: "no photo",
  },
  parcoursAcademique: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  likes: [{ type: ObjectId, ref: "user" || "vet" }],

  postedBy: {
    type: ObjectId,
    ref: "vet",
  },
  // },
  // { timestamps: true }
});
module.exports = mongoose.model("pub", PubSchema);
