import { useQuery } from "@apollo/client";
import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUserContent } from "../../context/userContext";
import { GET_USER_ALL_DATA } from "../../graphql";
import { useNavigate } from "react-router";
import "./Resultpage.css";

const ResultpageComponent = () => {
  const { setCurrentUser, currentUser, userId } = useUserContent();
  const navigation = useNavigate();
  const { loading, error, data } = useQuery(GET_USER_ALL_DATA, {
    variables: { id: userId },
  });
  useEffect(() => {
    if (data && userId && currentUser) {
      setCurrentUser(data?.usersPermissionsUser?.data?.attributes);
      const personalDetailsThere =
        data?.usersPermissionsUser?.data?.attributes?.deatils?.data !== null;
      if (!personalDetailsThere) {
        navigation("/PersonalDetails");
        return;
      }
      const educationDetailsThere =
        data?.usersPermissionsUser?.data?.attributes?.education?.data !== null;
      if (!educationDetailsThere) {
        navigation("/EducationDetails");
        return;
      }
      const skillsThere =
        data?.usersPermissionsUser?.data?.attributes?.skill?.data !== null;
      if (!skillsThere) {
        navigation("/SkillandProject");
        return;
      }
      const providerThere = currentUser?.providers;
      if (providerThere && providerThere.length < 1) {
        navigation("/SocialMediaLinks");
      }
      // console.log(currentUser, "asasasasas");
    }
  }, [data, userId, currentUser]);

  return (
    <div className="resultpage_container d-flex flex-row    ">
      {/* left sidebar */}
      <div className="Resleft_sidebar">
        <h1 className="ResSidebar_title">Unified Internet Profile</h1>
        <p className="Ressidebar_underline"></p>
        <div className="d-flex flex-column">
          <NavLink to="/Resultpage" className="links">
            Home
          </NavLink>
          <NavLink
            to={{
              pathname: "/EducationPage",
            }}
            state={{
              data: data?.usersPermissionsUser?.data?.attributes?.education
                ?.data,
            }}
            className="links"
          >
            Education
          </NavLink>
          <NavLink
            state={{
              data: data?.usersPermissionsUser?.data?.attributes?.skill?.data,
            }}
            to="/Projectpage"
            className="links"
          >
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
      {/* Profile details with About and Skills */}
      <div className="d-flex flex-column w-100">
        {/* blur picture */}
        <div className="blur_picture"></div>

        {/* title and Address */}
        <div className="profile_container shadow">
          {/* image container */}
          <div className="profileImageContainer">
            <img
              src={currentUser?.avatar_url}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "inherit" }}
            />
          </div>

          {/* profile details container */}
          <div className="profile_title_container ">
            {/* profilem title container */}
            <div className="d-flex flex-column ">
              <h1 className="Profiile_title mb-2">{currentUser?.name}</h1>
              <p className="mb-5">{currentUser?.bio}</p>
            </div>

            {/* profile Address container */}
            <div className="d-flex flex-row mt-5">
              {/* Mail container */}
              <div className="d-flex flex-row justify-content-betweeuseUserContentn">
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

        {/* about */}
        <div className="text-dark padding_left_and_top mt-5">
          <h6 className="h6">About</h6>
          <br></br>
          <p className="mt-3">
            A Dedicated , Hardworking and Technical oriented Computer Science
            Engineer. Eagerly waiting for a challenging position in reputable
            organization to utilize my Technical skills for the growth of
            organization as well as to enhance my Knowledge and skills in
            changing Environment
          </p>
        </div>

        {/* skills */}
        <div className="text-dark padding_left_and_top w-50 mt-4">
          <h6 className="h6">Skills</h6>
          <br></br>
          {data?.usersPermissionsUser?.data?.attributes?.skill?.data?.attributes?.skills
            .split(",")
            .map((skill) => {
              return (
                <button key={skill} className="btn btn-secondary btn-sm">
                  {skill}
                </button>
              );
            })}
          {/* <button className="btn btn-secondary btn-sm">React.js</button>
          <button className="btn btn-secondary btn-sm">CSS</button>
          <button className="btn btn-secondary btn-sm">HTML</button>
          <button className="btn btn-secondary btn-sm">JavaScript</button>
          <button className="btn btn-secondary btn-sm">Figma</button>
          <button className="btn btn-secondary btn-sm">Adobe Photoshop</button>
          <button className="btn btn-secondary btn-sm">
            Adobe Illustrator
          </button>
          <button className="btn btn-secondary btn-sm">UI/UX</button>
          <button className="btn btn-secondary btn-sm">C</button>
          <button className="btn btn-secondary btn-sm">Java</button>
          <button className="btn btn-secondary btn-sm">Python</button>
          <button className="btn btn-secondary btn-sm">R</button> */}
        </div>

        {/* languages */}
        <div className="text-dark padding_left_and_top mt-4">
          <h6 className="h6">Languages</h6>
          <br></br>
          <button className="btn btn-primary">English</button>
          <button className="btn btn-primary">Telugu</button>
          <button className="btn btn-primary">Hindi</button>
        </div>
      </div>
    </div>
  );
};

export default ResultpageComponent;
