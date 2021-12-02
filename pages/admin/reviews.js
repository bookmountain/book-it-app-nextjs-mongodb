import React from "react";
import { getSession } from "next-auth/client";
import Layout from "../../components/layout/Layout";
import RoomReviews from "../../components/admin/RoomReviews";
const AllUsersPage = (props) => {
  return (
    <Layout title="Room Reviews">
      <RoomReviews />
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

export default AllUsersPage;
