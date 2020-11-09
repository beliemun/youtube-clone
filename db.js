import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import "./models/Video";

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true, // 경고를 없애주기 위해 사용
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Conneted to DB");
const handleError = () => console.log(`❌ Error on DB Connections:${error}`);

// 한 번만 실행됨
db.once("open", handleOpen);
db.on("error", handleOpen);
