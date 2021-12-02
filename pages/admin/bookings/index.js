import React from "react";
import { getSession } from "next-auth/client";
import Layout from "../../../components/layout/Layout";
import AllBookings from "../../../components/admin/AllBookings";

const AllBookingsPage = (props) => {
  return (
    <Layout title="All Bookings">
      <AllBookings />
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

export default AllBookingsPage;
