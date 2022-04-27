import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router";
import { useLocation, useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { GET_USER_ALL_DATA } from "../../graphql";
import "./EducationPage.css";
import { useUserContent } from "../../context/userContext";

const EducationPageComponent = (props) => {
  const location = useLocation();
  // const { data } = location?.state;
  const { userData, currentUser } = useUserContent();
  // const
  const data = currentUser?.education?.data;
  console.log(data, "d");
  const [parsedUser, setParsedUser] = useState();
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      setParsedUser(currentUser);
    }
  }, [currentUser]);

  return (
    <div className="EducationPage_Container d-flex flex-row">
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

        <div className="text-dark padding_left_and_top mt-5 w-100">
          <h6 className="h6">Education Details</h6>
          <br></br>
          <div className="d-flex flex-row justify-content-between">
            {/* <div className="bg-light mt-3 "> */}
            {data?.attributes?.educations.map((education, index) => {
              return (
                <div key={index} className="bg-light mt-3 ">
                  <button className="btn btn-outline-primary">
                    {education?.title}
                  </button>
                  <p className="mt-3">{education?.college}</p>
                  <p>CGPA : {education?.grade}</p>
                  <p>Year of Pass : {education?.year_of_pass}</p>
                </div>
              );
            })}
            {/* <div className="bg-light mt-3 ">
              <button className="btn btn-outline-danger">B.tech</button>
              <p className="mt-3">
                Rajiv Gandhi University of Knowledge Technologies - Nuzvid
              </p>
              <p>CGPA : 75%</p>
            </div>
            <div className="bg-light  mt-3">
              <button className="btn btn-outline-info">Puc</button>
              <p className="mt-3">
                Rajiv Gandhi University of Knowledge Technologies - Nuzvid
              </p>
              <p>CGPA : 75%</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPageComponent;
