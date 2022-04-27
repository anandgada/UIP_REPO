import "./Signup.css";
import user_icon from "./Icons/username.svg";
import Lock_icon from "./Icons/LockVector.svg";
import mail from "./Icons/MailVector.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useUserContent } from "../../context/userContext";

const Signupcomponent = () => {
  let navigate = useNavigate(); //navigation
  let [userName, setUserName] = useState("");
  let [signup_email, setEmail] = useState("");
  let [signup_password, setPassword] = useState("");
  const { signUp } = useUserContent();

  // navigation functions
  function login() {
    navigate("/login");
  }
  function personalDetails() {
    navigate("/PersonalDetails");
  }

  useEffect(() => {
    if (signUp?.data) {
      if(signUp?.data?.register?.jwt){
        navigate("/login")
      }
      console.log(signUp?.data,"daaaa")
    }
  }, [signUp?.data]);

  // alert function
  function Alert() {
    if (!userName || !signup_email || !signup_password) {
      alert("Enter a Valid Username , Email , password");
    } else {
      signUp.signUp({
        variables: {
          username: userName,
          password: signup_password,
          email: signup_email,
        },
      });
    }
  }
  return (
    <div>
      {/* Blur picture */}
      <div className="blur_picture"></div>

      {/* Signup Container */}
      <div className="d-flex flex-row justify-content-center con">
        <div className="signup_container ">
          {/* title */}
          <h1 className="signup_title pb-2">Signup</h1>

          {/* underline */}
          <p className="signup_underline mb-2"></p>

          {/* Subtitle */}
          <p className="signup_subtitle mb-5">Create Your Account</p>

          {/* Username Container*/}
          <div className="Signup_usrname_container">
            <label className="mb-2 label">Username : </label>
            <br></br>
            <img src={user_icon} className="userIcon " />
            <p className="userline"></p>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="signup_input form-control mb-3"
              placeholder="Naveen chandu Tampara"
              id="signup_usrname"
            />
          </div>

          {/* Email Container  */}
          <div className="signup_email_container">
            <label className="mb-2 label">Email :</label>
            <br></br>
            <img src={mail} className="emailicon" />
            <p className="emailline"></p>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="signup_input form-control mb-3"
              placeholder="n160302@rguktn.ac.in"
              id="signup_email"
            />
          </div>

          {/* Password Container */}
          <div className="signup_pwd_container">
            <label className="mb-2 label">Password : </label>
            <br></br>
            <img src={Lock_icon} className="lockicon" />
            <p className="lockline"></p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="signup_input form-control mb-3"
              placeholder="********"
              id="signup_pwd"
            />
          </div>

          {/* button */}
          <button className="btn btn-primary mt-3" onClick={Alert}>
            Create Account
          </button>
        </div>
      </div>

      <p className="text-center ">
        Already have an Account ?{" "}
        <a className="text-primary " href="#" onClick={login}>
          Sign in{" "}
        </a>
      </p>
    </div>
  );
};

export default Signupcomponent;
