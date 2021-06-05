import React, { useContext } from "react";
import { GoogleAuthContext } from "../../context/GoogleAuthContext";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";

const Login = () => {
  const { onLogedChange } = useContext(GoogleAuthContext);

  const handleLogIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((data) => {
        const username = data.additionalUserInfo.profile.name;
        const profileImg = data.additionalUserInfo.profile.picture;
        localStorage.setItem("loged", "true");
        localStorage.setItem("username", `${username}`);
        localStorage.setItem("profileImg", `${profileImg}`);
        onLogedChange(true, { username, profileImg });
        toast("Loged in!", {
          type: "info",
        });
      })
      .catch((err) => {
        if (!err.code === "auth/popup-closed-by-user") console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login-container">
        <h2> Please, login to continue. </h2>
        <div id="gSignInWrapper">
          <div
            id="customBtn"
            className="customGPlusSignIn"
            onClick={handleLogIn}
          >
            <span className="icon"></span>
            <span className="label">Sign in with </span>
            <span className="buttonText"> Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
