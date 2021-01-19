import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// collection inside the databse
export default mongoose.model("tiktokVideos", tiktokSchema);

// 2: 30 : 02
