import React from "react";
import Navbar from "../components/Navbar";

function UserProfile({ clientInfo }) {
  console.log(clientInfo);
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <img
          src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt="profile-img"
        />
        <h1>User Profile</h1>
        <h2>User: {clientInfo.currentUser.username}</h2>
        <h2>Member Since: {clientInfo.currentUser.memberSince}</h2>
      </div>
    </div>
  );
}

export default UserProfile;
