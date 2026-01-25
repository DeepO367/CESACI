import { useEffect } from "react";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutRole from "./components/AboutRole";
import MembershipBenefits from "./components/membershipBenefits";
import VisionMission from "./components/VisionMission";
import Directors from "./components/Directors";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutRole/>
      <MembershipBenefits />
      <VisionMission />
      <Directors />
    </>
  );
}

export default App;
