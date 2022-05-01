import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUserContent } from "../../context/userContext";
import { CREATE_SKILLS } from "../../graphql";

const SkillandProjectComponent = () => {
  const [skills, setSkills] = useState("");
  const [about, setabout] = useState("");
  const [project, setProject] = useState({
    role: "",
    duration: "",
    description: "",
    title: "",
  });
  let Navigate = useNavigate();
  const { userId } = useUserContent();

  const [createSkills, { data, loading, error }] = useMutation(CREATE_SKILLS);
  function Resultpage() {
    // Navigate("/Resultpage");
    if (
      !Object.values(project).every(
        (p) => p.length > 0 && p != "" && p !== null
      ) ||
      !skills
    ) {
      alert("Please fill all fields");
    } else {
      createSkills({ variables: { userId, projects: [project], skills } });
    }
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data?.createUserSkillsandProject?.data?.id) {
        window && window.location.reload();

        return;
      }
    }
  }, [data]);
  return (
    // PersonalDetails_container
    <div className="background_Color d-flex flex-row h-50">
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
        <h3 className="mb-5">3.Skill and Projects </h3>
        <label className="mb-3">Skills (seperate by ,)</label>
        <input
          type="text"
          className="form-control place mb-5"
          placeholder="Enter your Skills "
          onChange={(e) => setSkills(e.target.value)}
          value={skills}
        />

        {/* Project */}
        <label className="mb-4">Projects</label>
        <br></br>
        <div>
          <div className="d-flex flex-row ">
            <div className="w-50">
              <label>Project title: </label>
              <br></br>
              <input
                type="text"
                className="form-control place mt-3"
                placeholder="Enter your Project title"
                onChange={(e) =>
                  setProject((prev) => ({ ...prev, title: e.target.value }))
                }
                value={project.title}
              />
            </div>
            <div className="w-50">
              <label>Role Played : </label>
              <br></br>
              <input
                type="text"
                className="form-control place mt-3"
                placeholder="Enter your Role"
                onChange={(e) =>
                  setProject((prev) => ({ ...prev, role: e.target.value }))
                }
                value={project.role}
              />
            </div>
            <div className="w-50">
              <label>Duration : </label>
              <br></br>
              <input
                type="text"
                className="form-control place mt-3"
                placeholder="Enter your Duration Period"
                onChange={(e) =>
                  setProject((prev) => ({ ...prev, duration: e.target.value }))
                }
                value={project.duration}
              />
            </div>
          </div>
          <div className="mt-3">
            <label>Description : </label>
            <br></br>
            <textarea
              onChange={(e) =>
                setProject((prev) => ({ ...prev, description: e.target.value }))
              }
              value={project.description}
            />
          </div>
        </div>
        <div className="mt-3">
          <label>About Yourself : </label>
          <br></br>
          <textarea onChange={(e) => setabout(e.target.value)} value={about} />
        </div>

        {/* Next button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={Resultpage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillandProjectComponent;
