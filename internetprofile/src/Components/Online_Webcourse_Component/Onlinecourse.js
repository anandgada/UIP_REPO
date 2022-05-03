import { useMutation } from "@apollo/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserContent } from "../../context/userContext";
import { UPDATE_USER_LINKEDIN } from "../../graphql";
import "./Onlinecourse.css";
import Avatar from "react-avatar";

const OnlineCoursesComponent = () => {
  const { userData, currentUser, userId } = useUserContent();
  const [linedInThere, setLinedInThere] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [linkedInData, setLinkedInData] = useState({});
  useEffect(() => {
    if (!currentUser) return;
    if (currentUser?.linkedin_data) {
      setLinedInThere(true);
      const jsonParsedData = JSON.parse(currentUser?.linkedin_data);
      setLinkedInData(jsonParsedData);
    }
  }, [currentUser]);

  const [updateLinkedInData, { data, loading, error }] =
    useMutation(UPDATE_USER_LINKEDIN);

  const loadLinkedinDataAndUpdate = async () => {
    setLoading(true);
    try {
      const linkedInProvider = (currentUser?.providers || []).find(
        (provider) => provider.provider === "linkedIn"
      );
      const username = linkedInProvider?.value;
      console.log(username);
      const req = await axios.get(
        `http://localhost:8000/user?username=${username}`
      );
      if (req.data) {
        const jsonData = JSON.stringify(req.data);
        updateLinkedInData({ variables: { userId, data: jsonData } });
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (data) {
      if (data?.updateUsersPermissionsUser?.data?.id) {
        window.location.reload();
      }
    }
  }, [data]);

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
              <Avatar
                // value={currentUser?.deatils?.data?.attributes?.firstName}
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
        </div>
        <div className="text-dark padding_left_and_top mt-5 w-100 ">
          <h6 className="h6">Online Presence</h6>
          <br></br>
          {!linedInThere && (
            <button
              style={{ marginTop: 20 }}
              onClick={loadLinkedinDataAndUpdate}
              className="btn btn-primary"
            >
              Load Linkedin
            </button>
          )}
        </div>
        {console.log(linkedInData, Object.keys(linkedInData))}
        {Object.keys(linkedInData).length > 0 && (
          <div className="text-left margin">
            <button
              onClick={loadLinkedinDataAndUpdate}
              className="btn btn-outline-primary linkedinBtn"
            >
              Update Linkedin Data
            </button>
            <div className="OnlinedataContainer w-50 mt-3">
              <h1 className="heading ">
                Name : {linkedInData?.data?.name.trim()}
              </h1>
              <p className="p"> SKills : {linkedInData?.data?.skills}</p>
              <p className="p">Bio : {linkedInData?.data?.bio}</p>
              <div>
                {linkedInData?.data?.experience.map((exp, index) => {
                  return (
                    <p className="p">
                      Experience: {exp.role} @ {exp.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineCoursesComponent;
