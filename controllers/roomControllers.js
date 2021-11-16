import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

const getAllRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

const addNewRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

const updateRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

const deleteRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.findByIdAndDelete(req.query.id);
  if (!room) {
    return res.status(404).json({
      success: false,
      error: "Room not found with this ID",
    });
  }

  res.status(200).json({
    success: true,
    message: "Room is delete",
  });
});

export { getAllRooms, addNewRoom, getSingleRoom, updateRoom, deleteRoom };
