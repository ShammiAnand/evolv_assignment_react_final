import * as React from "react";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export const CardItem = ({ user }) => {
  return (
    <div
      style={{
        width: "90%",
        height: "27%",
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
      <div style={{ width: "4rem", marginLeft: "2rem" }}>
        <CircularProgressbarWithChildren
          value={`${(user.stepsWalked / user.stepsTarget) * 100}`}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "1rem", fontWeight: "800" }}>
              {user.stepsWalked}
            </span>
            <span style={{ fontSize: "0.6rem", fontWeight: "300" }}>
              walked
            </span>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div
        style={{
          marginLeft: "1rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <PlusCircleOutlined style={{ fontSize: "1.5rem" }} />
        <div
          style={{
            marginTop: "0.2rem",
            marginBottom: "0.2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "1.2rem", fontWeight: "800" }}>
            {user.stepsTarget / 1000}k
          </span>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "300",
              marginTop: "-0.2rem",
            }}
          >
            target
          </span>
        </div>
        <MinusCircleOutlined style={{ fontSize: "1.5rem" }} />
      </div>

      <div
        style={{
          backgroundColor: "#36F5C7",
          height: "2.5rem",
          width: "2.5rem",
          borderRadius: "1rem",
          marginLeft: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/bell.png"}
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
      </div>
    </div>
  );
};
