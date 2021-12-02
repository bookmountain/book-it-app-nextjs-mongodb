import React from "react";
import { getSession } from "next-auth/client";
import Profile from "../../components/user/Profile";
import Layout from "../../components/layout/Layout";

const UpdateProfilePage = (props) => {
  return (
    <Layout title="Update Profile">
      <Profile>User Profile</Profile>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default UpdateProfilePage;
