import React from "react";
import clapper from "../../images/clapper.png";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    width: "100%",
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(.75turn, rgba(15,214,175, 1), 80%, rgba(0,253,151,0.6)"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white"
  },

  username: {
    marginLeft: 10,
    letterSpacing: "2px",
    fontSize: 10,
    fontWeight: 700,
    paddingTop: 10,
    paddingBottom: 5
  },

  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    paddingRight: 0,
    cursor: "pointer"
  },
  icon: {
    height: 25
  },
  leftIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15
  }
};

const Navbar = ({ children, height, buttons, match, history }) => {
  if (!window.localStorage.getItem("token")) {
    history.push("/");
  }
  return (
    <div style={{ ...localStyles.container, height }}>
      <div style={localStyles.wrapper}>
        <div style={localStyles.leftIcons}>
          <img
            style={localStyles.icon}
            src={clapper}
            alt=""
            onClick={() => {
              window.localStorage.removeItem("token");
              history.push("/");
            }}
          />
          <div style={localStyles.username}>
            {window.localStorage.getItem("username") &&
              `HI ${window.localStorage.getItem("username").toUpperCase()}!`}
          </div>
        </div>
        <div style={localStyles.button}>
          {buttons.map((button, index) => (
            <div
              style={
                index !== buttons.length - 1
                  ? {
                      marginRight: 15,
                      opacity: button.id === match.params[0] ? 1 : 0.6
                    }
                  : {
                      marginRight: 0,
                      opacity: button.id === match.params[0] ? 1 : 0.6
                    }
              }
              key={index}
            >
              {button.component}
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
