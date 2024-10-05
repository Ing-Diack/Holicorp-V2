import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Candidature from "./components/Candidater";
import Incubateur from "./components/sign_up/Incubateur";
import Ceo from "./components/sign_up/Ceo";
import SignIn from "./components/signIn";
import TableuDeBord from "./dashboard/components/scenes/TableauBord";
import Challenge from "./dashboard/components/scenes/Challenge";
import Cours from "./dashboard/components/scenes/Cours";
import Excercices from "./dashboard/components/scenes/Excercices";
import Corde from "./dashboard/components/scenes/Corde";
import Creation from "./dashboard/components/scenes/Corde/Creation.jsx";
import Listes from "./dashboard/components/scenes/Corde/Listes.jsx";
import Incubateurs from "./dashboard/components/scenes/Incubateurs";
import Candidatures from "./dashboard/components/scenes/Candidatures";
import Profile from "./dashboard/components/scenes/Profile.jsx";
import Membres from "./dashboard/components/scenes/Membres";
import ProfileIncubateur from "./dashboard/components/scenes/ProfileIncubateur.jsx";
import Compte from "./dashboard/components/scenes/Compte.jsx";
import VerifyMail from "./components/sign_up/VerifyMail";
import { AuthContextProvider } from "./utils/Context/AuthContext";
import DashboardCeo from "./dashboard/DashboardCeo";
import DashboardIncubateur from "./dashboard/DashboardIncubateur";
import PortfolioDetails from "./components/Incubateur/PortfolioDetails";
import PortfolioDetailsEntreprenariat from "./components/Entreprenariat/PortfolioDetails";
import RouterProtected from "./components/RouterProtected/RouterProtected";
import Onboarding from "./components/Onboarding";
import MyStartUp from "./dashboard/components/scenes/MyStartUp.jsx";
import Password from "./components/Password";
import ErrorPage from "./components/ErrorPage/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidature" element={<Candidature />} />
          <Route path="/candidature/incubateur" element={<Incubateur />} />
          <Route path="/candidature/ceo" element={<Ceo />} />
          <Route path="/connexion" element={<SignIn />} />
          <Route
            path="dashboard/ceo/"
            element={
              <RouterProtected>
                <DashboardCeo />
              </RouterProtected>
            }
          >
            <Route path="tableau" element={<TableuDeBord />} />
            <Route path="incubateurs" element={<Incubateurs />} />
            <Route path="mystartup" element={<MyStartUp />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="compte/:id" element={<Compte />} />
            <Route path="challenges" element={<Challenge />} />
            <Route path="cours" element={<Cours />} />
            <Route path="exercices" element={<Excercices />} />
          </Route>
          <Route
            path="dashboard/incubateur"
            element={
              <RouterProtected>
                <DashboardIncubateur />
              </RouterProtected>
            }
          >
            <Route path="tableau" element={<TableuDeBord />} />

            <Route path="challenges" element={<Challenge />} />
            <Route path="cours" element={<Cours />} />
            <Route path="profile/:id" element={<ProfileIncubateur />} />
            <Route path="exercices" element={<Excercices />} />
            <Route path="candidatures" element={<Candidatures />} />
            <Route path="membres" element={<Membres />} />
            <Route path="corde" element={<Corde />} />
            <Route path="corde/creation" element={<Creation />} />
            <Route path="corde/listes" element={<Listes />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/ceo/verify-email" element={<VerifyMail />} />
          <Route path="/incubateur/verify-email" element={<VerifyMail />} />
          <Route path="/candidature/password/:status" element={<Password />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/incubateurDetails/:id" element={<PortfolioDetails />} />
          <Route
            path="/entreprenariatDetails/:id"
            element={<PortfolioDetailsEntreprenariat />}
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
