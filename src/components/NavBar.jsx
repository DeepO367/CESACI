import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-wrapper">
        <div className="logo-text">
          <span className="logo-green">ESACCI</span>
        </div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#benefits">Membership Benefits</a>
          <a href="#vision">Vision & Mission</a>
          <a href="#">Contact</a>
        </div>

        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
