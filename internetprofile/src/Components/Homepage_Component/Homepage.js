import React from "react";
import "./Homepage.css";
import manVector from "./Images/manVector.svg";
import { useNavigate } from "react-router-dom";


const Homepagecomponent = () => {
  let navigate = useNavigate(); //navigation Hook


  //navigation functions
  function login() {
    navigate("/login");
  }
  function signup() {
    navigate("/Signup");
  }

  return (
    // {Homepage_container}
    <div className="whole_container d-flex flex-row ">
      {/* Text_container */}
      <div>
        {/* blur picture */}
        <div className="blur_picture"></div>
        {/*title container*/}
        <div>
          <div className="title_container d-flex flex-column justify-content-center shadow-lg">
            <h1 className="text-white text title shadow-sm">Unified Internet Profile</h1>
          </div>
          <p className="subtitle">Our Platform provides you to the gunuine and trusted user profilesfor your Company...</p>
        </div>
        <div className="intro_container ">
          <p>
            Students who are about to apply for a job, give so many direct links
            on the resume about their performance on different programming
            languages and the projects they had done, which are might not be
            visited by the companies, so we designed a web application to
            provide brief details about their projects and their performance
            through API's. Using the API's, we go through their profiles in
            different web applications such as Hacker Rank, LinkedIn., into see
            their work experiences and projects they done Students who are about
            to apply for a job, give so many direct links on the resume about
            their performance on different programming languages and the
            projects they had done, which are might not be visited by the
            companies, so we designed a web application to provide brief details
            about their projects and their performance through API's. Using the
            API's, we go through their profiles in different web applications
            such as Hacker Rank, LinkedIn., into see their work experiences and
            projects they done
          </p>
        </div>

        {/* Button container  */}
        <div className="d-flex flex-row">
          <button className="btn btn-light login_btn" onClick={login}>Login</button>
          <button className="btn btn-outline-primary signup_btn" onClick={signup}>Sign Up</button>
        </div>
      </div>
      {/*image_container */}
      <div className="mr-5 imagevector">
        <img src={manVector} className="manVector" />
      </div>
    </div>
  );
};
export default Homepagecomponent;
