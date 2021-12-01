import nc from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import onError from "../../../../middlewares/error";
import {
  getUserDetails,
  updateUser,
  deleteUser,
} from "../../../../controllers/authControllers";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../middlewares/auth";

const handler = nc({
  onError,
});

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUserDetails);

handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateUser);

handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteUser);

export default handler;
