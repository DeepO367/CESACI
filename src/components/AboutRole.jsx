import roleImage from "../assets/aboutRole.png";

const AboutRole = () => {
  return (
    <section className="about-role-section">
      <div className="about-role-wrapper">
        {/* LEFT */}
        <div className="about-role-text">
          <span className="section-eyebrow"></span>
          <h3 className="about-role-title">
            OUR ROLE AS A CHAMBER
          </h3>

          <ol className="about-role-list">
            <li>
              Facilitate trade activities between the two economic blocks and beyond, depending on the need.
            </li>
            <li>
              Serve as catalysts of innovation between the two economic blocks by exchanging skills in the ICT sector.
            </li>
            <li>
              Negotiate for relaxed trade barriers and promote investment in the primary industries, i.e., mining, agriculture, forestry, fishing, and infrastructure.
            </li>
            <li>
              Negotiate for relaxed business visas and implementation of the FTA corridors.
            </li>
            <li>
              Promote SMMEs and Large Enterprises in the two economic regions.
            </li>
            <li>
              Exchange of skills as far human capital is concerned.
            </li>
            <li>
              Promote agriculture to ensure food security in the two economic blocks, hence lowering food prices.
            </li>
          </ol>
        </div>

        {/* RIGHT */}
        <div className="about-role-image">
          <img src={roleImage} alt="Trade facilitation and partnership" />
        </div>
      </div>
    </section>
  );
};

export default AboutRole;
