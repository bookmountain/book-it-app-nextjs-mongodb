import nc from "next-connect";
import dbConnect from "../../../../config/dbConnect";
import { getAllAdminRoom } from "../../../../controllers/roomControllers";
import onError from "../../../../middlewares/error";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../middlewares/auth";

const handler = nc({
  onError,
});

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getAllAdminRoom);

export default handler;
