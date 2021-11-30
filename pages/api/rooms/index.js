import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { getAllRooms, addNewRoom } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/error";
import { authorizeRoles, isAuthenticatedUser } from "../../../middlewares/auth";

const handler = nc({
  onError,
});

dbConnect();

handler.get(getAllRooms);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(addNewRoom);

export default handler;
