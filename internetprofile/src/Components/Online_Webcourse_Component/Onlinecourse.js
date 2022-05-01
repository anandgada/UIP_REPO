import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserContent } from "../../context/userContext";
import "./Onlinecourse.css";

const OnlineCoursesComponent = () => {
  const { userData, currentUser } = useUserContent();

  return (
    <div className="OnlinecourseContainer d-flex flex-row">
      {/* left sidebar */}
      <div className="Resleft_sidebar">
        <h1 className="ResSidebar_title">Unified Internet Profile</h1>
        <p className="Ressidebar_underline"></p>
        <div className="d-flex flex-column">
          <NavLink to="/Resultpage" className="links">
            Home
          </NavLink>
          <NavLink to="/Educationpage" className="links">
            Education
          </NavLink>
          <NavLink to="/Projectpage" className="links">
            Projects
          </NavLink>
          {/* <NavLink to="/WorkExperience" className="links">
            Work Experience
          </NavLink> */}
          <NavLink to="/OnlineCourses" className="links">
            Online Presence
          </NavLink>
          <button
            style={{
              background: "none",
              border: "none",
              textAlign: "left",
              color: "white",
              fontWeight: "bold",
              margin: "2rem 3rem",
            }}
            onClick={() => {
              window.localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="d-flex flex-column w-100">
        {/* Profile details Container */}
        <div className=" d-flex flex-column">
          {/* blur picture */}
          <div className="blur_picture"></div>

          {/* title and Address */}
          <div className="profile_container shadow ">
            {/* image container */}
            <div className="profileImageContainer">
              <img
                src={userData?.avatar_url}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "inherit" }}
              />
            </div>

            {/* profile details container */}
            <div className="profile_title_container ">
              {/* profilem title container */}
              <div className="d-flex flex-column ">
                <h1 className="Profiile_title mb-2">{userData?.name}</h1>
                <p className="mb-5">{userData?.bio}</p>
              </div>

              {/* profile Address container */}
              <div className="d-flex flex-row mt-5">
                {/* Mail container */}
                <div className="d-flex flex-row justify-content-between">
                  <i className="bi bi-envelope-open-fill icons"></i>
                  <p className="icons">{currentUser?.email}</p>
                </div>
                {/* Phone container */}
                <div className="d-flex flex-row ">
                  <i className="bi bi-telephone-fill icons"></i>
                  <p className="icons">
                    {currentUser?.deatils?.data?.attributes?.phone_number}
                  </p>
                </div>
                {/* address container */}
                <div className="d-flex flex-row">
                  <i className="bi bi-geo-alt-fill icons"></i>
                  <p className="icons">
                    {currentUser?.deatils?.data?.attributes?.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-dark padding_left_and_top mt-5 w-100 ">
          <h6 className="h6">Online Presence</h6>
          <br></br>
          <div className="bg-light w-25 mt-3  text-center">
            <button className="btn btn-outline-danger ">Hacker rank</button>
            <br></br>
            {/* <button className="btn btn-primary btn-sm">Python</button><br></br> */}
            <div className="card_container ">
              <p className="coursetitle">Python</p>
              <h3 className="mt-3 mb-3">76%</h3>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default OnlineCoursesComponent;
