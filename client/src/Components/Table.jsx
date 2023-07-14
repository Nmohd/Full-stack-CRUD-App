import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllUsers, getAllUsers, deleteUser } from "../services/fetchApi";
import { useDispatch, useSelector } from "react-redux";

const Table = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(getAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  let navigate = useNavigate();

  let onClickHandler = () => {
    navigate("/page2");
  };

  let deleteHandler = (i) => {
    alert("Are you sure you want to delete");
    let deleteUserId = allUsers.allUsers[i]._id;
    dispatch(deleteUser(deleteUserId));
    dispatch(fetchAllUsers());
  };

  let viewHandler = (i) => {
    let viewUserId = allUsers.allUsers[i]._id;
    localStorage.setItem("UserID", viewUserId);
    localStorage.setItem("id", i);

    navigate("/page3");
  };
  let updateHandler = (i) => {
    let viewUserId = allUsers.allUsers[i]._id;
    let name = allUsers.allUsers[i].name;
    let email = allUsers.allUsers[i].email;
    let phone = allUsers.allUsers[i].phone;
    localStorage.setItem("uUserID", viewUserId);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("src", "show");

    navigate("/page2");
  };

  return (
    <>
      <center>
        <h2>User Details </h2>
      </center>
      <div className="Main-Table">
        <button className="add-user-Btn" onClick={() => onClickHandler()}>
          Add User
        </button>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>

          {allUsers.allUsers.length > 0 ? (
            allUsers.allUsers.map((ele, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{ele.name}</td>
                  <td>
                    <button
                      className="view-user-Btn"
                      onClick={() => viewHandler(i)}
                    >
                      View
                    </button>
                    <button
                      className="edit-user-Btn"
                      onClick={() => updateHandler(i)}
                    >
                      Edit
                    </button>
                    <button
                      className="del-user-Btn"
                      onClick={() => deleteHandler(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </table>
      </div>
    </>
  );
};

export default Table;

/*




  {
    "name": "Johney Jonny",
    "phone": "9848577823",
    "email": "Johney@gmail.com"
}


  {
    "name": "Yes papa",
    "phone": "9848577823",
    "email": "Yespapa@gmail.com"
}

  {
    "name": "Eating Sugar",
    "phone": "9848577823",
    "email": "EatingSugar@gmail.com"
}
  {
    "name": "No Papaa",
    "phone": "9848577823",
    "email": "Nopapa@gmail.com"
}
  {
    "name": "Telling Lies",
    "phone": "9848577823",
    "email": "tellingLIes@gmail.com"
}
  {
    "name": "No Papa",
    "phone": "9848577823",
    "email": "Nopapaa@gmail.com"
}
  {
    "name": "Open",
    "phone": "9848577823",
    "email": "open@gmail.com"
}
  {
    "name": "Your",
    "phone": "9848577823",
    "email": "your@gmail.com"
}
  {
    "name": "Mouth",
    "phone": "9848577823",
    "email": "Mouth@gmail.com"
}
  {
    "name": "Hahahaha",
    "phone": "9848577823",
    "email": "hahahahah@gmail.com"
}


*/
