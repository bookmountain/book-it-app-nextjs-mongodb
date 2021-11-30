import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { stripCheckoutSession } from "../../../controllers/paymentControllers";
import onError from "../../../middlewares/error";
import { isAuthenticatedUser } from "../../../middlewares/auth";

const handler = nc({
  onError,
});

dbConnect();

handler.use(isAuthenticatedUser).get(stripCheckoutSession);

export default handler;
