import React, { useEffect, useState } from "react";
import "./personalDetails.css";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { CREATE_PERSONAL_DETAILS } from "../../graphql";
import { useUserContent } from "../../context/userContext";
// import { useState } from "react";

const PersonalDetailsComponent = () => {
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [edumail, setedumail] = useState("");
  const [dob, setdob] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [gender, setGender] = useState("");
  const { userId } = useUserContent();
  const [uLocation, setLocation] = useState("");
  // const [female, setfemale] = useState("");

  const [updatePersonalDetails, { data, error, loading }] = useMutation(
    CREATE_PERSONAL_DETAILS
  );
  //Alert
  function AlertDialoguebox() {
    if (!firstname || !lastName || !uLocation || !dob || !phonenumber) {
      alert("Enter All the Fields");
    } else {
      updatePersonalDetails({
        variables: {
          firstName: firstname,
          lastName: lastName,
          dob: dob,
          phone_number: phonenumber,
          gender: gender,
          location: uLocation,
          userId: userId,
        },
      });
    }
  }

  useEffect(() => {
    if (data) {
      const userCreated =
        data?.data?.createUserPersonalDetail?.data?.id !== null;
      if (userCreated) {
        navigate("/Resultpage");
      } else {
        alert("Please try again adding details.!");
      }
    }
  }, [data]);

  return (
    // PersonalDetails_container
    <div className="background_Color d-flex flex-row">
      {/* left sidebar */}
      <div className="left_sidebar">
        <h1 className="Sidebar_title">Unified Internet Profile</h1>
        <p className="sidebar_underline"></p>
      </div>

      {/* blur picture */}
      <div className="blur_picture"></div>

      {/* personal details container */}
      <div className="personalDetails_Container w-50 shadow-sm">
        {/* heading */}
        <h3 className="mb-5">1.Personal Information </h3>

        {/* fields container */}
        <div className="d-flex flex-row justify-content-between">
          {/*first name  */}
          <div>
            <label className="mb-2">First Name :</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              className="form-control form-control-sm place"
              placeholder="Enter your first name"
              id="Firstname"
            />
            <br></br>
          </div>

          {/* last name */}
          <div>
            <label className="mb-2">last Name :</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              className="form-control place form-control-sm "
              placeholder="Enter your last name"
              id="Lastname"
            />
          </div>
        </div>

        {/* mail */}
        <div>
          <label className="mb-2">Location : </label>
          <br></br>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            className="form-control place form-control-sm "
            placeholder="india"
            id="Email"
            value={uLocation}
          />
          <br></br>
        </div>

        {/* date of birth */}
        <div>
          <label className="mb-2 place">Date of Birth : </label>
          <br></br>
          <input
            type="date"
            onChange={(e) => setdob(e.target.value)}
            className="form-control form-control-sm "
            id="Dateofbirth"
          />
          <br></br>
        </div>

        {/* Phone Number */}
        <div>
          <label className="mb-2">Phone Number :</label>
          <br></br>
          <input
            type="number"
            onChange={(e) => setphonenumber(e.target.value)}
            className="form-control place form-control-sm "
            placeholder="123456789"
            id="Phonenumber"
          />
          <br></br>
        </div>

        {/* Gender */}
        <h6>Gender</h6>
        <br></br>
        <div className="d-flex flex-row ">
          <div>
            <label id="male">Male </label>
            <input
              type="radio"
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input radio  "
              name="gender"
              id="male"
              value="male"
            />
          </div>
          <div>
            <label id="female"> Female</label>
            <input
              type="radio"
              onChange={(e) => setGender(e.target.value)}
              className="form-check-input radio"
              name="gender"
              id="female"
              value="female"
            />
          </div>
        </div>

        {/* Next button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary " onClick={AlertDialoguebox}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetailsComponent;
