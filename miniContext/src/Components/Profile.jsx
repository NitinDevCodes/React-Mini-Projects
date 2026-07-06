import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h3 className="message">Please login to view your profile.</h3>;
  }

  return (
    <div className="profile">
      <h2>Welcome 👋</h2>
      <p>{user.username}</p>
    </div>
  );
}

export default Profile;