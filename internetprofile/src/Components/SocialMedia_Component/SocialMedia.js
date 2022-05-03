import React, { useEffect, useState } from "react";
import "./SocialMedia.css";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILES, UPDATE_USER_PROVIDERS } from "../../graphql";
import { useUserContent } from "../../context/userContext";

const SocialMediaComponent = () => {
  let Navigate = useNavigate(); //navigation hook

  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const { currentUser, userId } = useUserContent();

  const [updateUserData, { data, error, loading }] = useMutation(
    UPDATE_USER_PROVIDERS
  );

  useEffect(() => {
    if (loading || !data) return;
    if (error) {
      alert(error.message + "er");
      return;
    }
    if (data?.updateUsersPermissionsUser?.data?.id) {
      window && window.location.reload();
      return;
    } else {
      alert(data?.error?.errors[0].message + "er");
    }
  }, [data, error, loading]);
  const completeProviders = () => {
    if (!linkedIn || !github) {
      alert("Please fill the fields first.!");
      return;
    }
    const data = [
      { provider: "github", value: github },
      {
        provider: "linkedIn",
        value: linkedIn,
      },
    ];
    updateUserData({ variables: { userId: userId, providers: data } });
  };
  // Alert functions

  return (
    //Social Links Container
    <div className="SocailMediaContainer d-flex flex-row">
      {/* sidebar */}
      <div className="Socialleft_sidebar">
        <h1 className="SocialSidebar_title ">Unified Internet Profile</h1>
        <p className="Socailsidebar_underline "></p>
      </div>
      {/* blur picture */}
      <div className="blur_picture"></div>

      {/* Socail media links */}
      <div className="SocialMedia_Container w-50">
        <h2>3.Social Media Profile Names</h2>
        <div className="pt-5">
          <textarea
            id="linkedtext"
            rows="2"
            cols="20"
            className="form-control EducationPlcaeholder mt-3 pt-3"
            placeholder="LinkedIn "
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          ></textarea>
          {/* <textarea id="hackertext" rows="2" cols="20" className="form-control EducationPlcaeholder mt-3 pt-3" placeholder="Hackerrank "></textarea> */}
          <textarea
            id="leetcodetext"
            rows="2"
            cols="20"
            className="form-control EducationPlcaeholder mt-3 pt-3"
            placeholder="Github "
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          ></textarea>
        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary mt-5" onClick={completeProviders}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponent;
