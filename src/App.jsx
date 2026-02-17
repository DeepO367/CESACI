import { useEffect } from "react";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutRole from "./components/AboutRole";
import MembershipBenefits from "./components/membershipBenefits";
import VisionMission from "./components/VisionMission";
import Programmes from "./components/Programmes";
import Directors from "./components/Directors";
import FocusAreas from "./components/FocusAreas";
import Contact from "./components/Contact";
import BecomeMember from "./components/BecomeMember";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate").forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();

  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutRole/>
      <FocusAreas />
      <MembershipBenefits />
      <Programmes />
      <VisionMission />
      <Directors />
      <BecomeMember />
      <Footer />
    </>
  );
}

export default App;
