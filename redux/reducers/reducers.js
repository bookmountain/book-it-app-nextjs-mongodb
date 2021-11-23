import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailsReducer } from "./roomReducers";
import {
  authReducer,
  forgotPasswordReducer,
  loadedUserReducer,
  userReducer,
} from "./userReducers";
import {
  bookedDatesReducer,
  bookingReducer,
  checkBookingReducer,
} from "./bookingReducer";

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingReducer,
});

export default reducers;
