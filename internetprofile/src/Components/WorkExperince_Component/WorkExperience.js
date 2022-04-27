import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContent } from "../../context/userContext";
import "./WorkExperience.css";

const WorkExperienceComponent = () => {
  const { currentUser, userData } = useUserContent();
  console.log(currentUser, "userrr");
  return (
    <div className="WorkExperienceComponent d-flex flex-row">
      {/* left sidebar */}
      <div className="Resleft_sidebar">
        <h1 className="ResSidebar_title">Unified Internet Profile</h1>
        <p className="Ressidebar_underline"></p>
        <div className="d-flex flex-column">
          <NavLink to="/Resultpage" className="links">
            Home
          </NavLink>
          <NavLink to="/EducationPage" className="links">
            Education
          </NavLink>
          <NavLink to="/Projectpage" className="links">
            Projects
          </NavLink>
          <NavLink to="/WorkExperience" className="links">
            Work Experience
          </NavLink>
          <NavLink to="/OnlineCourses" className="links">
            Online Presence
          </NavLink>
        </div>
      </div>

      <div className="d-flex flex-column">
        {/* blur picture */}
        <div className="blur_picture"></div>
        {/* title and Address */}
        <div className="profile_container shadow">
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
                <p className="icons">n160302@rguktn.ac.in</p>
              </div>
              {/* Phone container */}
              <div className="d-flex flex-row ">
                <i className="bi bi-telephone-fill icons"></i>
                <p className="icons">9666795700</p>
              </div>
              {/* address container */}
              <div className="d-flex flex-row">
                <i className="bi bi-geo-alt-fill icons"></i>
                <p className="icons">{userData?.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="text-dark padding_left_and_top mt-5 ">
          <h6 className="h6">Work Experience</h6>
          <p className="mt-3">
            Role Played : <span></span>
          </p>
          <p>
            Duration : <span>6 Months</span>
          </p>
          <p>
            Description :{" "}
            <span>
              Students who are about to apply for a job, give so many direct
              links on the resume about their performance on different
              programming languages and the projects they had done, which are
              might not be visited by the companies, so we designed a web
              application to provide brief details about their projects and
              their performance through API's. Using the API’s, we go through
              their profiles in different web applications such as Hacker Rank,
              LinkedIn., into see their work experiences and projects they done.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default WorkExperienceComponent;
