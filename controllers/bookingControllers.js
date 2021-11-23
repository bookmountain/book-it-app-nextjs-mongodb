import Booking from "../models/booking";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

// Create new booking => /api/bookings
const newBooking = catchAsyncErrors(async (req, res) => {
  const {
    room,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = req.body;

  const booking = await Booking.create({
    room,
    user: req.user._id,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
    paidAt: Date.now(),
  });

  res.status(200).json({
    success: true,
    booking,
  });
});

// Check room booking availabilities => /api/bookings/check
const checkRoomBookingAvailability = catchAsyncErrors(async (req, res) => {
  let { roomId, checkInDate, checkOutDate } = req.query;

  checkInDate = new Date(checkInDate);
  checkOutDate = new Date(checkOutDate);

  const bookings = await Booking.find({
    room: roomId,
    $and: [
      {
        checkInDate: {
          // $lte selects the documents where the value of the field is less than
          // or equal to (i.e. <=) the specified value.
          $lte: checkOutDate,
        },
      },
      {
        checkOutDate: {
          $gte: checkInDate,
        },
      },
    ],
  });

  // Check if there is any booking available

  let isAvailable;

  isAvailable = bookings && bookings.length === 0;

  if (bookings)
    res.status(200).json({
      success: true,
      isAvailable,
    });
});

// Check booked dates of a room => /api/bookings/check_booked_date
const checkBookedDatesOfRoom = catchAsyncErrors(async (req, res) => {
  const { roomId } = req.query;

  const bookings = await Booking.find({
    room: roomId,
  });

  let bookedDates = [];

  // Offset give in minutes, divided by 60 to get hours and added in booking.check-Date
  const timeDifference = moment().utcOffset() / 60;
  console.log(timeDifference);

  bookings.forEach((booking) => {
    const checkInDate = moment(booking.checkInDate).add(
      timeDifference,
      "hours"
    );
    const checkOutDate = moment(booking.checkOutDate).add(
      timeDifference,
      "hours"
    );

    const range = moment.range(moment(checkInDate), moment(checkOutDate));
    const dates = Array.from(range.by("day"));
    bookedDates = bookedDates.concat(dates);
  });

  res.status(200).json({
    success: true,
    bookedDates,
  });
});

// Get all bookings of current user => /api/bookings/me
const myBookings = catchAsyncErrors(async (req, res) => {
  // req.user store by isAuthenticated middleware
  const bookings = await Booking.find({
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    bookings,
  });
});

export {
  newBooking,
  checkRoomBookingAvailability,
  checkBookedDatesOfRoom,
  myBookings,
};
