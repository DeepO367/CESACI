export default function Directors() {
    return (
        <section id="directors" className="directors-section">
            <div className="directors-overlay"></div>

            <div className="directors-content">
                <div className="section-header animate fade-up">
                    <h2>Meet The Directors</h2>
                    <p>
                        Experienced leaders committed to driving strategic growth, governance,
                        and regional economic development.
                    </p>
                </div>

                <div className="directors-grid">
                    <div className="director-card animate slide-up">
                        <img src="/images/Festus.jpeg" alt="Director 1" />
                        <h3>Dr. Festus Maelo Sawoni</h3>
                        <span className="position">Director/Chairperson</span>
                        <p>
                            Holds Bcom,MBA, and PhD. in Developmental Economics. Responsible for contracts,training, international affairs.
                        </p>
                    </div>

                    <div className="director-card animate slide-up">
                        <img src="/images/Joe.jpeg" alt="Director 2" />
                        <h3>Joe Visagie</h3>
                        <span className="position">Director/Chairman</span>
                        <p>
                            As a dedicated Director on the Chamber of Commerce, I bring a strong foundation in administration and operations, driving strategic growth and organizational efficiency. With a proven ability to streamline processes, manage complex initiatives, and lead cross-functional teams, I am committed to advancing the Chamber’s mission while ensuring operational excellence. My focus on governance, compliance, and member service ensures that our programs and partnerships are delivered with integrity, impact, and sustainability. Passionate about local business development, I work collaboratively with stakeholders to foster a vibrant, inclusive, and thriving business community.
                        </p>
                    </div>

                    <div className="director-card animate slide-up">
                        <img src="/images/siwapiwe.jpeg" alt="Director 3" />
                        <h3>Siwapiwe Mpondonkulu</h3>
                        <span className="position">Finance</span>
                        <p>
                            Siwapiwe is a finance professional, with a background in Investment Management. She holds ACMA, CGMA designations from the Chartered Institute of Management Accountants (CIMA).
                        </p>
                    </div>

                    <div className="director-card animate slide-up">
                        <img src="/images/shadrack.jpeg" alt="Director 4" />
                        <h3>Nomsa Dlamini</h3>
                        <span className="position">Director of Technology & Innovation</span>
                        <p>
                            MSc. Radio & TV Engineering (Odessa); D’Tech.: Engineering; Electrical (TUT); PhD (UPEC); PE (K), MIEK, SMIEEE, IEEE CASS Ambassador for Africa 2024-2025.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
