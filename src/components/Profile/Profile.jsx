import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/userSlice";
import "./Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.auth.token);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail(data.body.email);
        setFirstName(data.body.firstName);
        setLastName(data.body.lastName);
        dispatch(setUserName(data.body.userName));
      });
  }, [dispatch, token]);

  const handleEdit = () => {
    setShowModal(true);
    setNewName(userName);
  };

  const handleSave = () => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newName }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUserName(data.body.userName));
        setShowModal(false);
      });
  };

  return (
    <div className="profile">
      <h1 className="profile__user">
        Welcome back
        <br />
        {userName} !
      </h1>
      {!showModal && (
        <button className="profile__btn" onClick={handleEdit}>
          Edit Name
        </button>
      )}
      {showModal && (
        <aside className="modal">
          <p className="modal__txt">Prénom : {firstName}</p>
          <p className="modal__txt">Nom : {lastName}</p>
          <p className="modal__txt">Email : {email}</p>
          <p className="modal__txt">
            Username :
            <input
              className="modal__input"
              id="username"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New username"
            />
          </p>
          <button className="modal__btn" onClick={handleSave}>
            Save
          </button>
        </aside>
      )}
    </div>
  );
}

export default Profile;
