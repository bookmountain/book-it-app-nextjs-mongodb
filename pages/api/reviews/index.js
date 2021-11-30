import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { createRoomReview } from "../../../controllers/roomControllers";
import onError from "../../../middlewares/error";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const handler = nc({
  onError,
});

dbConnect();

handler.use(isAuthenticatedUser).put(createRoomReview);

export default handler;
