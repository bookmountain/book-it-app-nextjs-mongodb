const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../data/rooms.json");

mongoose
  .connect(
    "mongodb+srv://sam:O8PU5KbOPrkHP7WP@cluster0.nskku.mongodb.net/bookit?retryWrites=true&w=majority"
  )
  .then((con) => console.log("Connected to Atlas database."));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("Rooms are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
