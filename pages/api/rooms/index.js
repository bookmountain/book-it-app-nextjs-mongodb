import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  getAllRooms,
  addNewRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";
import onError from "../../../middlewares/error";

const handler = nc({
  onError,
});

dbConnect();

handler.get(getAllRooms);
handler.post(addNewRoom);

export default handler;
