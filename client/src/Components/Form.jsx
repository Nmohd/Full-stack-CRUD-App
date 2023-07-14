import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../services/fetchApi";
import { updateUser } from "../services/updateUser";

const Form = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const [uUserData, setuUserData] = useState({
    email: "",
    name: "",
    phone: "",
  });

  let des = localStorage.getItem("src");

  const showHide = () => {
    if (des == "show") {
      setShowForm(false);
      localStorage.removeItem("src");
    }
  };

  useEffect(() => {
    showHide();
  }, []);

  const viewUserId = localStorage.getItem("uUserID");
  const uname = localStorage.getItem("name");
  const uemail = localStorage.getItem("email");
  const uphone = localStorage.getItem("phone");

  const onChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateChangeHandler = (e) => {
    setuUserData({
      ...uUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    alert("done");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(viewUserId, JSON.stringify(uUserData)));
    alert("done");
  };

  return (
    <div>
      {showForm ? (
        <form className="Main-Form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Entry Form</h2>
          <div className="form-control">
            <label>Name :</label>
            <input
              className="form-field"
              type="text"
              name="name"
              placeholder="Enter name"
              value={userData.name}
              required
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Email :</label>
            <input
              className="form-field"
              type="email"
              name="email"
              placeholder="Enter email"
              value={userData.email}
              required
              onChange={onChangeHandler}
            />
          </div>

          <div className="form-control">
            <label>Phone :</label>
            <input
              className="form-field"
              type="Tel"
              name="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="Enter 10 digit number"
              required
              value={userData.phone}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control">
            <label></label>
            <button className="create-user-Btn" type="submit">
              Create
            </button>
          </div>
        </form>
      ) : (
        <form className="Main-Form" onSubmit={(e) => handleUpdate(e)}>
        <h2>Update Form</h2>

          <div className="form-control">
            <label>Name :</label>
            <input
              className="form-field"
              type="text"
              name="name"
              placeholder={uname}
              value={uUserData.name}
              required
              onChange={onUpdateChangeHandler}
            />
          </div>
          <div className="form-control">
            <label>Email :</label>
            <input
              className="form-field"
              type="email"
              name="email"
              placeholder={uemail}
              value={uUserData.email}
              required
              onChange={onUpdateChangeHandler}
            />
          </div>

          <div className="form-control">
            <label>Phone :</label>
            <input
              className="form-field"
              type="Tel"
              name="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder={uphone}
              required
              value={uUserData.phone}
              onChange={onUpdateChangeHandler}
            />
          </div>
          <div className="form-control">
            <label></label>
            <button className="create-user-Btn" type="submit">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
