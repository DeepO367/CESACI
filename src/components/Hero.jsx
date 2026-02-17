import heroBg from "../assets/CHAMBER2.png";
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

        <h1>CESACI</h1>
        <p><h3>Chamber of East & SADC Countries</h3></p>
        <br/><p>Connecting East Africa & SADC for Trade, Investment & Growth</p>
        <br/>
        <div className="cta-wrapper">
          <a href="#membership"> <button className="cta-btn">Become a Member</button></a>

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
