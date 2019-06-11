import React from "react";
import useAuthorisation from "../../hooks/authorisation";
import AuthForm from "../AuthForm";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100%",
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
  }
};

const SignUp = props => {
  const {
    setPassword,
    setUsername,
    signUp,
    password,
    username,
    loading,
    error
  } = useAuthorisation(props.history);
  return (
    <div style={localStyles.container}>
      <div style={localStyles.wrapper}>
        <AuthForm
          setPassword={setPassword}
          setUsername={setUsername}
          onClick={signUp}
          password={password}
          username={username}
          buttonText={"SIGN UP"}
          formText={"CREATE ACCOUNT"}
          usernamePlaceholder={"Username"}
          passwordPlaceholder={"Password"}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default SignUp;
