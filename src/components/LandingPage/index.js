import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import clapper from "../../images/clapper.png";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    right: 0,
    backgroundImage:
      "linear-gradient(to bottom, rgba(15,214,175, 1), 20%, rgba(0,253,151,0.5)"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    alignItems: "center",
    width: "100%",
    height: "100vh"
  },
  link: {
    color: "black",
    textDecoration: "none",
    width: "100%"
  },

  clapper: {
    marginTop: 80,
    transform: "rotate(-10deg)"
  },

  title: {
    marginTop: 20,
    marginBottom: "auto",
    fontSize: 80,
    color: "white",
    fontWeight: 700,
    letterSpacing: "5px"
  },

  io: {
    fontSize: 50
  },

  buttons: {
    width: "80%",
    marginBottom: 60
  }
};

const LandingPage = () => {
  return (
    <div style={localStyles.container}>
      <div style={localStyles.wrapper}>
        <div style={localStyles.clapper}>
          <img src={clapper} alt={""} />
        </div>
        <div style={localStyles.title}>
          <span>movio</span>
        </div>
        <div style={localStyles.buttons}>
          <Link style={localStyles.link} to="/signup">
            <Button
              style={{
                marginBottom: 20
              }}
            >
              Sign Up
            </Button>
          </Link>
          <Link style={localStyles.link} to="/login">
            <Button
              style={{
                backgroundImage: "none",
                backgroundColor: "white",
                color: "#0FD6AF"
              }}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
