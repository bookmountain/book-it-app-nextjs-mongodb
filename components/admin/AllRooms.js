import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { getAdminRooms } from "../../redux/actions/roomActions";
import { toast } from "react-toastify";
import Loader from "../layout/Loader";
import { clearErrors } from "../../redux/actions/bookingActions";
import { MDBDataTable } from "mdbreact";

const AllRooms = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { rooms, error, loading } = useSelector((state) => state.allRooms);

  useEffect(() => {
    dispatch(getAdminRooms());
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);

  const setRooms = () => {
    const data = {
      columns: [
        {
          label: "Room ID",
          field: "id",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Price / Night",
          field: "price",
          sort: "asc",
        },
        {
          label: "Category",
          field: "category",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    rooms &&
      rooms.forEach((room) => {
        data.rows.push({
          id: room._id,
          name: room.name,
          price: `$${room.pricePerNight}`,
          category: room.category,
          actions: (
            <>
              <Link href={`/admin/rooms/${room._id}`}>
                <a className="btn btn-primary">
                  <i className="fa fa-pencil" />
                </a>
              </Link>
              <button className="btn btn-danger mx-2">
                <i className="fa fa-trash" />
              </button>
            </>
          ),
        });
      });
    return data;
  };

  return (
    <div className="container container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="my-5">
            {`${rooms && rooms.length} Rooms`}
            <Link href="/admin/rooms/new">
              <a className="mt-0 btn text-white float-right new-room-btn">
                Create Room
              </a>
            </Link>
          </h1>
          <MDBDataTable
            data={setRooms()}
            className="px-3"
            bordered
            striped
            hover
          />
        </>
      )}
    </div>
  );
};

export default AllRooms;
