import { combineReducers } from "redux";
import {
  allRoomsReducer,
  checkReviewReducer,
  newReviewReducer,
  newRoomReducer,
  roomDetailsReducer,
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
  bookingsReducer,
  checkBookingReducer,
} from "./bookingReducer";

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  newRoom: newRoomReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
  checkReview: checkReviewReducer,
});

export default reducers;
