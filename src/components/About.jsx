import { useEffect, useRef } from "react";
import gear from "../assets/Gear.png";
import kenya from "../assets/Kenya.png";
import uganda from "../assets/Uganda.png";
import southafrica from "../assets/South_Africa.png";
import zambia from "../assets/Zambia.png";
import namibia from "../assets/Namibia.png";
import botswana from "../assets/Botswana.png";
import rwanda from "../assets/Rwanda.png";
import angola from "../assets/Angola.png";
import burundi from "../assets/Burundi.png";
import eswatini from "../assets/Eswatini.png";
import southsudan from "../assets/South_Sudan.png";
import lesotho from "../assets/Lesotho.png";
import madagascar from "../assets/Madagascar.png";
import mauritius from "../assets/Mauritius.png";
import somalia from "../assets/somalia.png";
import seychelles from "../assets/Seychelles.png";
import tanzania from "../assets/Tanzania.png";
import comoros from "../assets/Comoros.png";
import congo from "../assets/Congo.png";
import mozambique from "../assets/Mozambique.png";

const About = () => {
  const gearRef = useRef(null);
  const lastScrollY = useRef(0);
  const rotation = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // adjust rotation speed here
      rotation.current += delta * 0.2;

      if (gearRef.current) {
        gearRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <div className="about-left">
          <h2 className="about-title">
            Powering Trade Without Borders
          </h2>

          {/* GEAR */}
          <div className="gear">
          <img
            ref={gearRef}
            src={gear}
            alt="Trade Mechanism Gear"
            className="about-gear"
          />
          </div>
        </div>

        <div className="about-content">
          <p>
            Chamber of East & SADC Countries and Industry (CESACI)
            is an organization whose primary objective is to facilitate trade
            links between the two economic blocks, namely the East African
            Community (EAC) and SADC.
          </p>

          <p>
            <strong>East African Community:</strong> Kenya, Uganda, Tanzania,
            Rwanda, Burundi, DRC Congo, South Sudan and Somalia.
          </p>

          <p>
            <strong>SADC:</strong> South Africa, Namibia, Angola, Mozambique,
            Comoros Island, Madagascar, Botswana, Zimbabwe, Tanzania, DRC Congo,
            Zambia, Malawi, Eswatini, Lesotho, Mauritius and Seychelles.
          </p>
        </div>
      </div>
      {/* FLAGS SLIDER */}

<div className="flags-section">

  <div className="flags-slider">

    <div className="flags-track">

      <img src={kenya} alt="Kenya" />
      <img src={uganda} alt="Uganda" />
      <img src={southafrica} alt="South Africa" />
      <img src={zambia} alt="Zambia" />
      <img src={namibia} alt="Namibia" />
      <img src={botswana} alt="Botswana" />
      <img src={rwanda} alt="Rwanda" />
      <img src={angola} alt="Angola" />
      <img src={burundi} alt="Burundi" />
      <img src={eswatini} alt="Eswatini" />
      <img src={southafrica} alt="South Africa" />
      <img src={lesotho} alt="Lesotho" />
      <img src={madagascar} alt="Madagascar" />
      <img src={mauritius} alt="Mauritius" />
      <img src={somalia} alt="Somalia" />
      <img src={seychelles} alt="Seychelles" />
      <img src={southsudan} alt="South Sudan" />
      <img src={tanzania} alt="Tanzania" />
      <img src={burundi} alt="Burundi" />
      <img src={comoros} alt="Comoros" />
      <img src={congo} alt="Congo" />
      <img src={mozambique} alt="Mozambique" />

    </div>

  </div>

</div>

    </section>
  );
};

export default About;
