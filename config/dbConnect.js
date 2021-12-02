import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect(process.env.DB_URI)
    .then((con) => console.log("Connected to Atlas database."));
};

export default dbConnect;
