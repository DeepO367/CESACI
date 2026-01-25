import { useEffect, useRef } from "react";
import gear from "../assets/Gear.png";

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
            Eastern and Southern Africa Chamber of Commerce and Industry (ESACCI)
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
    </section>
  );
};

export default About;
