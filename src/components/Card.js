import * as React from "react";
import { CardItem } from "./CardItem";

/*
other data values:
performedDate, scheduledDate, calorieIntake, calorieTarget,
proteinConsumed, proteinTarget, carbConsumed, carbTarget, fatConsumed, fatTarget
 */

export const Card = () => {
  const data = [
    {
      userId: 1,
      name: "Charvie Sharma",
      email: "charviesharma.cs@gmail.com",
      stepsWalked: 2547,
      stepsTarget: 4000,
    },
    {
      userId: 2,
      name: "Charvie Sharma",
      email: "charviesharma.cs@gmail.com",
      stepsWalked: 2547,
      stepsTarget: 4000,
    },
    {
      userId: 3,
      name: "Charvie Sharma",
      email: "charviesharma.cs@gmail.com",
      stepsWalked: 2547,
      stepsTarget: 4000,
    },
  ];

  return (
    <div
      style={{
        width: "75%",
        height: "50%",
        backgroundColor: "#101317",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <div style={{ margin: "1.5rem 1.5rem 1rem 0" }}>
          <span style={{ color: "white", fontWeight: "800" }}>Steps</span>
          <img
            src={process.env.PUBLIC_URL + "/steps.png"}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
        <div style={{ margin: "1.5rem 1.5rem 1rem 0" }}>
          <span style={{ color: "white", fontWeight: "800" }}>Nutrition</span>
          <img
            src={process.env.PUBLIC_URL + "/nutrition.png"}
            style={{ marginLeft: "0.5rem" }}
          />
        </div>
      </div>
      {/* END NAVBAR */}
      {/* USER CARDS */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {data.map((user) => (
          <CardItem key={user.userId} user={user} />
        ))}
      </div>
    </div>
  );
};
