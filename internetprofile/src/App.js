import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepagecomponent from "./Components/Homepage_Component/Homepage";
import Logincomponent from "./Components/Login_Component/Login";
import Signupcomponent from "./Components/Signup_Component/Signup";
import PersonalDetailsComponent from "./Components/Personaldetails_Component/personalDetails";
import EducationDetailsCompoenent from "./Components/Education_Component/educationDetails";
import SkillandProjectComponent from "./Components/SkillsandProjectDetails_Component/SkillsandProjects";
import SocialMediaComponent from "./Components/SocialMedia_Component/SocialMedia";
import ResultpageComponent from "./Components/Resultpage_Component/Resultpage";
import ProjectComponent from "./Components/Project_Component/Project";
import EducationPageComponent from "./Components/EducationPage_Component/EducationPage";
import WorkExperienceComponent from "./Components/WorkExperince_Component/WorkExperience";
import OnlineCoursesComponent from "./Components/Online_Webcourse_Component/Onlinecourse";
import { UserContextProvider } from "./context/userContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";

// const ProtectedRoute = () => {
//   return (

//   )
// }

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <UserContextProvider>
          <Routes>
            <Route exact path="/" element={<Homepagecomponent />} />
            <Route />
            <Route exact path="/login" element={<Logincomponent />}></Route>
            <Route exact path="/Signup" element={<Signupcomponent />}></Route>
            <Route
              exact
              path="/PersonalDetails"
              element={<PersonalDetailsComponent />}
            ></Route>
            <Route
              exact
              path="/EducationDetails"
              element={<EducationDetailsCompoenent />}
            ></Route>
            <Route
              exact
              path="/SkillandProject"
              element={<SkillandProjectComponent />}
            ></Route>
            <Route
              exact
              path="/SocialMediaLinks"
              element={<SocialMediaComponent />}
            ></Route>
            <Route
              exact
              path="/Resultpage"
              element={<ResultpageComponent />}
            ></Route>
            <Route
              exact
              path="/Projectpage"
              element={<ProjectComponent />}
            ></Route>
            <Route
              exact
              path="/EducationPage"
              element={<EducationPageComponent />}
            ></Route>
            {/* <Route
              exact
              path="/WorkExperience"
              element={<WorkExperienceComponent />}
            ></Route> */}
            <Route
              exact
              path="/OnlineCourses"
              element={<OnlineCoursesComponent />}
            ></Route>
          </Routes>
        </UserContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
