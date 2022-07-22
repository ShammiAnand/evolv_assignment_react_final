import * as React from "react";
import { PieChart } from "react-minimal-pie-chart";
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export const CardItem = ({ user }) => {
  const [targetSteps, setTargetSteps] = React.useState(0);
  const [targetCalorie, setTargetCalorie] = React.useState(0);

  React.useEffect(() => {
    setTargetSteps(user.stepsTarget);
    setTargetCalorie(user.stepsTarget);
  }, [user]);

  const handleIncrement = () => {
    setTargetSteps(targetSteps + 500);
  };

  const handleCalorieIncrement = () => {
    setTargetCalorie(targetCalorie + 100);
  };
  const handleCalorieDecrement = () => {
    setTargetCalorie(targetCalorie > 100 ? targetCalorie - 100 : 0);
  };

  const handleDecrement = () => {
    setTargetSteps(targetSteps > 500 ? targetSteps - 500 : 0);
  };

  return (
    <div
      style={{
        marginBottom: "2rem",
        width: "90%",
        height: "27%",
        borderRadius: "1rem",
        backgroundColor: "#1E262F",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/user_photo.png"}
        style={{ width: "2.5rem", height: "2.5rem", marginLeft: "1rem" }}
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
      <div style={{ width: "4rem", marginLeft: "3rem" }}>
        <CircularProgressbarWithChildren
          value={`${(user.stepsWalked / targetSteps) * 100}`}
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "1rem",
            borderRadius: "22%",
            backgroundColor: "#101317",
          }}
          onClick={handleIncrement}
        >
          <img src={process.env.PUBLIC_URL + "/plus.png"} />
        </div>
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
            {targetSteps / 1000}k
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "1rem",
            borderRadius: "22%",
            backgroundColor: "#101317",
          }}
          onClick={handleDecrement}
        >
          <img src={process.env.PUBLIC_URL + "/minus.png"} />
        </div>
      </div>

      <div
        style={{
          marginLeft: "3rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={process.env.PUBLIC_URL + "/checked.png"} />
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "800",
              marginLeft: "0.5rem",
            }}
          >
            15 Oct
          </span>
        </div>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={process.env.PUBLIC_URL + "/due.png"} />
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "800",
              marginLeft: "0.5rem",
            }}
          >
            22 Oct
          </span>
        </div>
      </div>
      <div
        style={{
          height: "80%",
          width: "3%",
          borderRadius: "1rem",
          backgroundColor: "#101317",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "0.7rem",
        }}
      >
        <img src={process.env.PUBLIC_URL + "/right.png"} />
      </div>
      <div style={{ width: "4rem", marginLeft: "3rem" }}>
        <PieChart
          data={[
            { title: "One", value: 10, color: "#F45C84" },
            { title: "Two", value: 15, color: "#03C7FC" },
            { title: "Three", value: 20, color: "#F5C90F" },
          ]}
          animate={true}
          lineWidth={20}
        />
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "1rem",
            borderRadius: "22%",
            backgroundColor: "#101317",
          }}
          onClick={handleCalorieIncrement}
        >
          <img src={process.env.PUBLIC_URL + "/plus.png"} />
        </div>
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
            {targetCalorie / 1000}k
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2rem",
            height: "1rem",
            borderRadius: "22%",
            backgroundColor: "#101317",
          }}
          onClick={handleCalorieDecrement}
        >
          <img src={process.env.PUBLIC_URL + "/minus.png"} />
        </div>
      </div>
      <div
        style={{
          height: "80%",
          width: "3%",
          borderRadius: "1rem",
          backgroundColor: "#101317",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "0.7rem",
        }}
      >
        <img src={process.env.PUBLIC_URL + "/right.png"} />
      </div>

      <div
        style={{
          backgroundColor: "#36F5C7",
          height: "2.5rem",
          width: "2.5rem",
          borderRadius: "1rem",
          marginLeft: "3rem",
          marginRight: "1rem",
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
