import axios from "axios";

import {
  CHECK_BOOKING_REQUEST,
  CHECK_BOOKING_SUCCESS,
  CHECK_BOOKING_FAIL,
  BOOK_DATES_SUCCESS,
  BOOK_DATES_FAIL,
  MY_BOOKINGS_SUCCESS,
  MY_BOOKINGS_FAIL,
  BOOKING_DETAIL_SUCCESS,
  BOOKING_DETAIL_FAIL,
  ADMIN_BOOKINGS_REQUEST,
  ADMIN_BOOKINGS_SUCCESS,
  ADMIN_BOOKINGS_FAIL,
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
  DELETE_BOOKING_RESET,
  CLEAR_ERRORS,
} from "../constants/bookingConstants";
import absoluteUrl from "next-absolute-url/index";

export const checkBooking =
  (roomId, checkInDate, checkOutDate) => async (dispatch) => {
    try {
      dispatch({ type: CHECK_BOOKING_REQUEST });

      let link = `/api/bookings/check?roomId=${roomId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`;

      const { data } = await axios.get(link);

      dispatch({
        type: CHECK_BOOKING_SUCCESS,
        payload: data.isAvailable,
      });
    } catch (error) {
      dispatch({
        type: CHECK_BOOKING_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getBookedDates = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/bookings/check_booked_dates?roomId=${id}`
    );

    dispatch({
      type: BOOK_DATES_SUCCESS,
      payload: data.bookedDates,
    });
  } catch (error) {
    dispatch({
      type: BOOK_DATES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const myBookings = (authCookie, req) => async (dispatch) => {
  try {
    const config = {
      headers: {
        cookie: authCookie,
      },
    };

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/bookings/me`, config);

    dispatch({
      type: MY_BOOKINGS_SUCCESS,
      payload: data.bookings,
    });
  } catch (error) {
    dispatch({
      type: MY_BOOKINGS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAdminBookings = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_BOOKINGS_REQUEST,
    });

    const { data } = await axios.get(`/api/admin/bookings`);

    dispatch({
      type: ADMIN_BOOKINGS_SUCCESS,
      payload: data.bookings,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BOOKINGS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_BOOKING_REQUEST,
    });

    const { data } = await axios.delete(`/api/admin/bookings/${id}`);

    dispatch({
      type: DELETE_BOOKING_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getBookingDetails = (authCookie, req, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        cookie: authCookie,
      },
    };

    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/bookings/${id}`, config);

    dispatch({
      type: BOOKING_DETAIL_SUCCESS,
      payload: data.booking,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_DETAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
