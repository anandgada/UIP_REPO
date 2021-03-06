import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUserContent } from "../../context/userContext";
import "./Project.css";
import Avatar from "react-avatar";

const ProjectComponent = () => {
  const { userData, currentUser } = useUserContent();
  const location = useLocation();
  // const { state } = location;
  const state = currentUser?.skill;
  console.log(state, "Asas", currentUser);
  return (
    <div className="d-flex flex-row  projectpage_Container">
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
      <div className="w-100 d-flex flex-column">
        {/* blur picture */}
        <div className="blur_picture"></div>

        {/* title and Address */}
        <div className="profile_container shadow ">
          {/* image container */}
          <div className="profileImageContainer">
            <Avatar
              name={
                currentUser?.deatils?.data?.attributes?.firstName +
                " " +
                currentUser?.deatils?.data?.attributes?.lastName
              }
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              size={"100%"}
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

        {/* Projects */}
        <div className="text-dark padding_left_and_top mt-5 ">
          {state?.data?.attributes?.projects.map((project, index) => {
            return (
              <div key={index}>
                <h6 className="h6">
                  {index + 1} : {project?.title}
                </h6>
                <p className="mt-3">
                  Role Played : <span>{project?.role}</span>
                </p>
                <p>
                  Duration : <span>{project.duration}</span>
                </p>
                <p>
                  Description :<span>{project?.description}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
