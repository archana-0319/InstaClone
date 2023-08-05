const { mongoose } = require("mongoose");

const PostSchema = mongoose.Schema({
  name: { type: String },
  location: { type: String },
  likes: { type: Number },
  description: { type: String },
  PostImage: { type: String },
  Date: { type: String } 
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

