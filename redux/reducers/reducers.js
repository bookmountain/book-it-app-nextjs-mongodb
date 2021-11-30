import { combineReducers } from "redux";
import {
  allRoomsReducer,
  checkReviewReducer,
  newReviewReducer,
  newRoomReducer,
  roomDetailsReducer,
  roomReducer,
} from "./roomReducers";
import {
  authReducer,
  forgotPasswordReducer,
  loadedUserReducer,
  userReducer,
} from "./userReducers";
import {
  bookedDatesReducer,
  bookingDetailsReducer,
  bookingReducer,
  bookingsReducer,
  checkBookingReducer,
} from "./bookingReducer";

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  newRoom: newRoomReducer,
  roomDetails: roomDetailsReducer,
  room: roomReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
  checkReview: checkReviewReducer,
});

export default reducers;
