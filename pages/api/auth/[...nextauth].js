import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";
import user from "../../../models/user";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;

        // Check if email and password is entered
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }
        // Find user in database
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      console.log("token", token);
      console.log("user", user);
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, userOrToken) => {
      console.log("session", session);
      console.log("userOrToken", userOrToken);
      session.user = userOrToken.user;
      return Promise.resolve(session);
    },
  },
});
