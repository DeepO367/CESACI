import React from "react";
// import "./MembershipBenefits.css";

export default function MembershipBenefits() {
  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-overlay"></div>
      <h2 className="section-title">Membership Benefits</h2>
      <p className="section-subtitle">
        Tailored value for businesses at every stage of growth
      </p>

      <div className="benefits-grid">
        {/* Small & Micro */}
        <div className="benefit-card">
          <div className="benefit-icon">▾</div>
          <h3>Small & Micro Enterprises</h3>
          <ul>
            <li>Marketing support</li>
            <li>Business networking</li>
            <li>Training & motivation</li>
            <li>Visa & trade permit assistance</li>
          </ul>
        </div>

        {/* Medium */}
        <div className="benefit-card highlight">
          <div className="benefit-icon">▾</div>
          <h3>Medium Enterprises</h3>
          <ul>
            <li>Marketing exposure</li>
            <li>Business networking</li>
            <li>Training & motivation</li>
            <li>Free exhibition stands</li>
            <li>Visa & trade permit support</li>
            <li>VIP seats during special events</li>
          </ul>
        </div>

        {/* Large */}
        <div className="benefit-card">
          <div className="benefit-icon">▾</div>
          <h3>Large Enterprises</h3>
          <ul>
            <li>VIP seats in all important events and Functions</li>
            <li>Marketing and advertising on our website and other platforms</li>
            <li>Multinational Business networking events.</li>
            <li>Free exhibition booths during the key events in different countries within the two economic blocks</li>
            <li>Business training and motivation workshops</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
