import React from "react";
import { fetchSingleUser, getSingleUser } from "../services/fetchSingleUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,  } from "react";

const ViewUserDetails = () => {
  const dispatch = useDispatch();

  const Id = localStorage.getItem("id");
  useEffect(() => {
    const viewUserId = localStorage.getItem("UserID");
    dispatch(fetchSingleUser(viewUserId));
  }, []);

  const singleUser = useSelector(getSingleUser);

  let someUser = singleUser.singleUser.name;

  return (
    <>
      <center>
        <h2>Full User Details </h2>
      </center>
      <div className="Main-Table">
        {
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>

            <tr>
              <td>{+Id + 1}</td>
              <td>{singleUser.singleUser.name}</td>
              <td>{singleUser.singleUser.email}</td>
              <td>{singleUser.singleUser.phone}</td>
            </tr>
          </table>
        }
      </div>
    </>
  );
};

export default ViewUserDetails;
