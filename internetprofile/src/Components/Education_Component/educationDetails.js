import React, { useEffect } from "react";
import "./educationDetails.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useUserContent } from "../../context/userContext";
import { useMutation } from "@apollo/client";
import { CREATE_EDUCATION } from "../../graphql";

const EducationDetailsCompoenent = () => {
  let Navigate = useNavigate();
  const [Btech, setBtech] = useState("");
  const [Bdate, setBdate] = useState("");
  const [Bcgpa, setBcgpa] = useState("");
  const [Inter, setInter] = useState("");
  const [Interdate, setInterdate] = useState("");
  const [InterCgpa, setInterCgpa] = useState("");
  const [SSC, setSsc] = useState("");
  const [Sscdate, setSscDate] = useState("");
  const [SscCgpa, setSscCgpa] = useState("");
  const [BtechdegreeCollege, setBcollege] = useState("");
  const [interCollege, setIntercollege] = useState("");
  const [sscCollege, setSSCcollege] = useState("");

  const { userId } = useUserContent();
  const [createUserEducation, { data, error, loading }] =
    useMutation(CREATE_EDUCATION);
  function SkillandProjects() {
    Navigate("/SkillandProject");
  }
  useEffect(() => {
    if (data) {
      if (data?.createUserEducationDetail?.data?.id) {
        window && window.location.reload();
      }
    }
  }, [data]);

  function Alerting() {
    if (
      !Btech ||
      !Bdate ||
      !Bcgpa ||
      !Inter ||
      !Interdate ||
      !InterCgpa ||
      !SSC ||
      !Sscdate ||
      !SscCgpa ||
      !BtechdegreeCollege ||
      !interCollege ||
      !sscCollege
    ) {
      alert("Enter All your Educations Details");
    } else {
      // SkillandProjects();
      const d = [
        {
          type: "btec",
          title: Btech,
          year_of_pass: Bdate,
          grade: Bcgpa,
          college: BtechdegreeCollege,
        },
        {
          type: "ssc",
          title: SSC,
          year_of_pass: Sscdate,
          grade: SscCgpa,
          college: sscCollege,
        },
        {
          type: "intermediate",
          title: Inter,
          year_of_pass: Interdate,
          grade: InterCgpa,
          college: interCollege,
        },
      ];
      createUserEducation({ variables: { userId, data: d } });
    }
  }

  return (
    <div className="EducationDetails_container d-flex flex-row">
      {/* Left sidebar */}
      <div className="Education_sidebar">
        <h1 className="Education_sidebar_title">Unified Internet Profile</h1>
        <p className="Education_sidebar_subtitle"></p>
      </div>

      {/* blur picture */}
      <div className="blur_picture"></div>

      {/* Education Details Container */}
      <div className="EducationDetails_Container ">
        <h3 className="mb-5">2.Education Details</h3>

        {/* B.tech container */}
        <div className="d-flex flex-row justify-content-between">
          <div>
            <label className="mb-2">Graduation Degree : </label>
            <input
              id="Btechdegree"
              onChange={(e) => setBtech(e.target.value)}
              type="text"
              className="form-control EducationPlcaeholder form-control-sm "
              placeholder="Enter Your Graducation Degree"
            />
          </div>
          <div>
            <label className="mb-2">Year of Pass :</label>
            <br></br>
            <input
              id="BtechdegreeDate"
              onChange={(e) => setBdate(e.target.value)}
              type="month"
              className="form-control form-control-sm "
            />
            <br></br>
          </div>
          <div>
            <label className="mb-2">CGPA :</label>
            <br></br>
            <input
              id="BtechdegreeCgpa"
              onChange={(e) => setBcgpa(e.target.value)}
              type="number"
              step="0.01"
              className="form-control form-control-sm "
            />
          </div>
          <div>
            <label className="mb-2">College :</label>
            <br></br>
            <input
              id="BtechdegreeCollege"
              onChange={(e) => setBcollege(e.target.value)}
              type="text"
              className="form-control form-control-sm "
            />
          </div>
        </div>

        {/* Inter container */}
        <div className="d-flex flex-row justify-content-between">
          <div>
            <label className="mb-2">Intermediate : </label>
            <input
              id="Inter"
              onChange={(e) => setInter(e.target.value)}
              type="text"
              className="form-control EducationPlcaeholder form-control-sm "
              placeholder="Enter Your Intermediate"
            />
          </div>
          <div>
            <label className="mb-2">Year of Pass :</label>
            <br></br>
            <input
              id="InterDate"
              onChange={(e) => setInterdate(e.target.value)}
              type="month"
              className="form-control form-control-sm "
            />
            <br></br>
          </div>
          <div>
            <label className="mb-2">CGPA :</label>
            <br></br>
            <input
              id="InterCgpa"
              onChange={(e) => setInterCgpa(e.target.value)}
              type="number"
              step="0.01"
              className="form-control form-control-sm "
            />
          </div>
          <div>
            <label className="mb-2">College :</label>
            <br></br>
            <input
              id="interCollege"
              onChange={(e) => setIntercollege(e.target.value)}
              type="text"
              className="form-control form-control-sm "
            />
          </div>
        </div>

        {/* SSC container */}
        <div className="d-flex flex-row justify-content-between">
          <div>
            <label className="mb-2">SSC: </label>
            <input
              id="SSC"
              onChange={(e) => setSsc(e.target.value)}
              type="text"
              className="form-control EducationPlcaeholder form-control-sm "
              placeholder="Enter Your SSC"
            />
          </div>
          <div>
            <label className="mb-2">Year of Pass :</label>
            <br></br>
            <input
              id="SscDate"
              onChange={(e) => setSscDate(e.target.value)}
              type="month"
              className="form-control form-control-sm "
            />
            <br></br>
          </div>
          <div>
            <label className="mb-2">CGPA :</label>
            <br></br>
            <input
              id="SscCgpa"
              onChange={(e) => setSscCgpa(e.target.value)}
              type="number"
              step="0.01"
              className="form-control form-control-sm "
            />
          </div>
          <div>
            <label className="mb-2">College :</label>
            <br></br>
            <input
              id="sscinstitue"
              onChange={(e) => setSSCcollege(e.target.value)}
              type="text"
              className="form-control form-control-sm "
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="btn btn-primary mt-5" onClick={Alerting}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationDetailsCompoenent;
