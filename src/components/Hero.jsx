import heroBg from "../assets/background.png";
import logo from "../assets/EsacciLogo.png";
const Hero = () => {

  return (
    <section id="home" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo" />

        <h1>ESACCI</h1>
        <p>Eastern and Southern Africa Chamber of Commerce and Industry</p>

        <div className="cta-wrapper">
          <button className="cta-btn">Become a Member</button>

          {/* Animated arrows */}
          <div className="arrow-container">
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
