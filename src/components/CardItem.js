import * as React from "react";

export const CardItem = ({ user }) => {
  return (
    <div
      style={{
        width: "90%",
        height: "25%",
        borderRadius: "1rem",
        backgroundColor: "#1E262F",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/user_photo.png"}
        style={{ width: "2.5rem", height: "2.5rem", marginLeft: "0.5rem" }}
      />
      <div
        style={{ marginLeft: "1rem", display: "flex", flexDirection: "column" }}
      >
        <span style={{ color: "white", fontWeight: "600" }}> {user.name} </span>
        <span style={{ color: "white", fontWeight: "200" }}>
          {" "}
          {user.email}{" "}
        </span>
      </div>
    </div>
  );
};
