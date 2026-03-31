import { useState } from "react";

function DirectorCard({ image, name, position, bio }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="director-card animate slide-up">
            <img src={image} alt={name} />

            <h3>{name}</h3>

            <span className="position">{position}</span>

            <p className={`director-bio ${expanded ? "expanded" : ""}`}>
                {bio}
            </p>

            <button
                className="read-more-btn"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Read Less" : "Read More"}
            </button>
        </div>
    );
}

export default function Directors() {
    return (
        <section id="directors" className="directors-section">

            <div className="directors-overlay"></div>

            <div className="directors-content">

                <div className="section-header animate fade-up">
                    <h2>Meet The Directors</h2>

                    <p>
                        Experienced leaders committed to driving strategic growth,
                        governance, and regional economic development.
                    </p>
                </div>

                <div className="directors-grid">

                    <DirectorCard
                        image="./images/Festus.jpeg"
                        name="Dr. Festus Maelo Sawoni"
                        position="President"
                        bio="Holds BCom, MBA, and PhD in Developmental Economics. Responsible for contracts, training, and international affairs. He brings extensive experience in economic development strategy, regional trade coordination, and institutional leadership across multiple African markets."
                    />

                    <DirectorCard
                        image="./images/Joe.jpeg"
                        name="Joe Visagie"
                        position="Vice President"
                        bio="As a dedicated Director on the Chamber of Commerce, I bring a strong foundation in administration and operations, driving strategic growth and organizational efficiency. With a proven ability to streamline processes, manage complex initiatives, and lead cross-functional teams, I am committed to advancing the Chamber’s mission while ensuring operational excellence. My focus on governance, compliance, and member service ensures that our programs and partnerships are delivered with integrity, impact, and sustainability. Passionate about local business development, I work collaboratively with stakeholders to foster a vibrant, inclusive, and thriving business community."
                    />

                    <DirectorCard
                        image="./images/anou.png"
                        name="Dr S.M Mambo"
                        position="Director(Technology & Innovation)"
                        bio=""
                    />

                    <DirectorCard
                        image="./images/anou.png"
                        name="Mr Mogodi Matamela"
                        position="Director/CFO"
                        bio=""
                    />

                </div>

            </div>

        </section>
    );
}
