import React from "react";
import { getSession } from "next-auth/client";
import Layout from "../../../components/layout/Layout";
import UpdateUser from "../../../components/admin/UpdateUser";

const UpdateUserPage = (props) => {
  return (
    <Layout title="Update User">
      <UpdateUser />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default UpdateUserPage;
