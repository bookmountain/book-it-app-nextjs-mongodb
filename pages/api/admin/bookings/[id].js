import nc from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import onError from "../../../../middlewares/error";
import { deleteAdminBooking } from "../../../../controllers/bookingControllers";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../middlewares/auth";

const handler = nc({
  onError,
});

dbConnect();

handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .delete(deleteAdminBooking);

export default handler;
