import React from "react";
import Button from "../Button";
import clapper from "../../images/clapper.png";

const localStyles = {
  container: {
    paddingTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    paddingBottom: 60
  },
  input: {
    padding: 15,
    paddingLeft: 20,
    fontSize: 16,
    border: 0,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 20,
    letterSpacing: 0.5,
    color: "grey",
    outline: 0
  },

  button: {
    width: "40%",
    marginTop: "auto",
    letterSpacing: "2px",
    marginBottom: 120
  },

  formText: {
    fontWeight: 700,
    letterSpacing: "2px",
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    marginTop: 20
  },

  header: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
    color: "white",
    fontWeight: 700,
    letterSpacing: "5px",
    marginBottom: 80
  },

  icon: {
    height: 50,
    marginRight: 15
  },

  error: {
    color: "#FF6F68",
    letterSpacing: "2px",
    fontWeight: 700
  }
};

const Input = ({ style, type, onChange, placeholder, value, onFocus }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%"
      }}
    >
      <div style={{ height: "28px" }}>
        {!!value.length && (
          <span
            style={{
              fontSize: 12,
              color: "white",
              letterSpacing: "2px",
              fontWeight: 400,
              marginLeft: 16,
              marginBottom: 5
            }}
          >
            {placeholder.toUpperCase()}
          </span>
        )}
      </div>
      <input
        style={style}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
      />
    </div>
  );
};

const AuthForm = ({
  setPassword,
  setUsername,
  onClick,
  password,
  username,
  formText,
  buttonText,
  usernamePlaceholder,
  passwordPlaceholder,
  loading,
  error,
  onFocus
}) => {
  return (
    <div style={localStyles.container}>
      <div style={localStyles.header}>
        <img style={localStyles.icon} src={clapper} alt={""} />
        <span>movio</span>
      </div>
      <span style={localStyles.formText}>{formText}</span>
      <Input
        style={localStyles.input}
        type="username"
        onChange={e => setUsername(e.target.value)}
        placeholder={usernamePlaceholder}
        value={username}
        onFocus={onFocus}
      />
      <Input
        style={localStyles.input}
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder={passwordPlaceholder}
        value={password}
        onFocus={onFocus}
      />
      <div style={localStyles.error}>
        {!!error && <span>{error.text}</span>}
      </div>
      <Button style={localStyles.button} onClick={onClick}>
        {loading ? "LOADING..." : buttonText}
      </Button>
    </div>
  );
};

export default AuthForm;
