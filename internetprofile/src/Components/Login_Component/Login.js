import "./Login.css";
import lock_icon from "./Icons/LockVector.svg";
import Mail_icon from "./Icons/MailVector.svg";
import { useNavigate } from "react-router";
import { useUserContent } from "../../context/userContext";
import { useEffect, useState } from "react";

const Logincomponent = () => {
  let navigate = useNavigate(); //Navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useUserContent();

  //navigation functions
  function Resultpage() {
    navigate("/Resultpage");
  }

  function Signup() {
    navigate("/Signup");
  }

  // Alert
  function alertbox(e) {
    e.preventDefault();
    //Conditional ALert
    if (!email || !password) {
      alert("Please fill all the fields correctly.!");
    } else {
      signIn.signIn({ variables: { identifier: email, password } });
    }
  }

  useEffect(() => {
    if (signIn?.error) {
      signIn?.reset();
      alert(signIn.error + " er");
    }
    if (signIn?.data && signIn?.data?.login?.jwt) {
      window.localStorage.setItem("token", signIn?.data?.login?.jwt);
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("userId", signIn?.data?.login?.user?.id);
      setTimeout(() => {
        window.location.reload();
        navigate("/Resultpage");
      }, 1000);
    }
  }, [signIn?.data, signIn?.error]);
  return (
    <div className="container">
      {/* Blur picture */}
      <div className="blur_picture"></div>

      {/* Login container */}
      <div className="d-flex  flex-column justify-content-center">
        <form>
          <div className="login_container p-5 mb-3">
            <div className="pb-4">
              <h1 className="login_title text-center pb-1">Login</h1>
              <p className="login_line"></p>
              <p className="login_subtitle">Login to manage your Account</p>
            </div>

            {/* Email Textfield */}
            <div className="Email_container">
              <label htmlFor="Email" className="login_label">
                {" "}
                Email :
              </label>
              <br></br>
              <img src={Mail_icon} className="Email_icon" />
              <p className="Email_line"></p>
              <input
                type="email"
                // id="Email"
                onChange={(e) => setEmail(e.target.value)}
                // value={email}
                className="input form-control mb-3"
                placeholder="Naveen chandu Tamapara"
                disabled={false}
              ></input>
            </div>

            {/* password Textfield */}
            <div className="Password_container">
              <label htmlFor="Password" className="login_label">
                Password :{" "}
              </label>
              <br></br>
              <img src={lock_icon} className="Pwd_icon" />
              <p className="Pwd_line"></p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                // id="Password"
                className="input form-control"
                placeholder="***********"
                value={password}
              />
              <br></br>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={alertbox}
            >
              Sign in
            </button>
          </div>
        </form>

        {/* undertext container */}
        <p className="text-center">
          Don't have an Account ?{" "}
          <a className="text-primary span_text" href="#" onClick={Signup}>
            Singup
          </a>
        </p>
        <p className="text-center text-primary">Forgot Password</p>
      </div>
    </div>
  );
};
export default Logincomponent;
