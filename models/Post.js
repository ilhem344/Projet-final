const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  likes: [{ type: ObjectId, ref: "vet" || "user" }],
  comments: [
    {
      text: String,
      postedBy: { type: ObjectId, ref: "vet" || "user" },
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: "vet" || "user",
  },
  // },
  // { timestamps: true }
});
module.exports = mongoose.model("post", PostSchema);
