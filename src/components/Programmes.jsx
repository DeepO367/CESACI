// import { useState, useEffect } from "react";

// const programmesData = [
//   {
//     title: "Business Forums",
//     image: "./images/forumHD.webp",
//   },
//   {
//     title: "Trade Exhibitions",
//     image: "./images/tradeHD.jpg",
//   },
//   {
//     title: "Youth Programmes",
//     image: "./images/black-community.jpg",
//   },
//   {
//     title: "CESACI Summit",
//     image: "./images/CHAMBER2.png",
//   },
// ];

// const newsData = [
//   {
//     title: "CESACI signs regional trade agreement",
//     image: "./images/forumHD.webp",
//     desc: "Strengthening cross-border investment and cooperation.",
//   },
//   {
//     title: "Upcoming Zambia Investment Forum",
//     image: "./images/CHAMBER2.png",
//     desc: "Connecting investors and exporters across Africa.",
//   },
//   {
//     title: "Youth Innovation Programme launched",
//     image: "./images/black-community.jpg",
//     desc: "Empowering Africa’s next generation of entrepreneurs.",
//   },
// ];

// export default function Programmes() {
//   const [cards, setCards] = useState(programmesData);
//   const [showModal, setShowModal] = useState(false);

//   // shuffle animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCards((prev) => {
//         const newArr = [...prev];
//         const first = newArr.shift();
//         newArr.push(first);
//         return newArr;
//       });
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="programmes" className="programmes-section">

//       <div className="section-header animate fade-up">
//         <h2>Programmes & Events</h2>
//       </div>

//       {/* IMAGE GRID */}

//       <div className="programmes-grid">

//         {cards.map((item, index) => (

//           <div
//             key={index}
//             className="programme-card"
//             style={{
//               backgroundImage: `url(${item.image})`,
//             }}
//           >

//             <div className="programme-overlay" />

//             <h3>{item.title}</h3>

//           </div>

//         ))}

//       </div>


//       {/* NEWS CTA */}

//       <div className="news-cta">

//         <p>
//           Stay in touch with everything we are doing by reading our news
//           and seeing upcoming events.
//         </p>

//         <button onClick={() => setShowModal(true)}>
//           Read the Latest
//         </button>

//       </div>


//       {/* MODAL */}

//       {showModal && (

//         <div className="news-modal">

//           <div className="news-modal-content">

//             <span
//               className="close"
//               onClick={() => setShowModal(false)}
//             >
//               ×
//             </span>

//             <h3>Latest News & Events</h3>

//             <div className="news-grid">

//               {newsData.map((news, i) => (

//                 <div key={i} className="news-card">

//                   <img src={news.image} />

//                   <h4>{news.title}</h4>

//                   <p>{news.desc}</p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       )}

//     </section>
//   );
// }


import { useState } from "react";

export default function Programmes() {

  const [showModal, setShowModal] = useState(false);

  return (

    <section id="programmes" className="programmes-section">


      {/* HEADER */}

      <div className="section-header animate fade-up">

        <h2>Programmes & Events</h2>

      </div>



      {/* PREMIUM SLIDER */}

      <div className="programmes-slider">

        <div className="programmes-track">


          <div className="programme-card">

            <img src="./images/forumHD.webp" />

            <div className="programme-overlay"></div>

            <h3>Business Forums</h3>

          </div>


          <div className="programme-card">

            <img src="./images/tradeHD.jpg" />

            <div className="programme-overlay"></div>

            <h3>Trade Exhibitions</h3>

          </div>


          <div className="programme-card">

            <img src="./images/black-community.jpg" />

            <div className="programme-overlay"></div>

            <h3>Youth Programmes</h3>

          </div>


          <div className="programme-card">

            <img src="./images/CHAMBER2.png" />

            <div className="programme-overlay"></div>

            <h3>CESACI Summit</h3>

          </div>


          {/* duplicate for smooth loop */}

          <div className="programme-card">

            <img src="./images/forumHD.webp" />

            <div className="programme-overlay"></div>

            <h3>Business Forums</h3>

          </div>


          <div className="programme-card">

            <img src="./images/tradeHD.jpg" />

            <div className="programme-overlay"></div>

            <h3>Trade Exhibitions</h3>

          </div>


          <div className="programme-card">

            <img src="./images/black-community.jpg" />

            <div className="programme-overlay"></div>

            <h3>Youth Programmes</h3>

          </div>


          <div className="programme-card">

            <img src="./images/CHAMBER2.png" />

            <div className="programme-overlay"></div>

            <h3>CESACI Summit</h3>

          </div>


        </div>

      </div>



      {/* NEWS CTA */}


      <div className="news-cta">

        <p>

          Stay in touch with everything we are doing by reading our news

          and seeing events we have coming up.

        </p>


        <button onClick={() => setShowModal(true)}>

          Read the Latest

        </button>

      </div>



      {/* MODAL */}


      {showModal && (

        <div className="news-modal">

          <div className="news-modal-content">


            <span

              className="close"

              onClick={() => setShowModal(false)}

            >

              ×

            </span>


            <h3>Latest News & Events</h3>


            <div className="news-grid">


              <div className="news-card">

                <img src="./images/forumHD.webp"/>

                <h4>Trade Agreement Signed</h4>

                <p>CESACI strengthens regional integration.</p>

              </div>


              <div className="news-card">

                <img src="./images/CHAMBER2.png"/>

                <h4>Zambia Investment Forum</h4>

                <p>Connecting African investors.</p>

              </div>


              <div className="news-card">

                <img src="./images/black-community.jpg"/>

                <h4>Youth Innovation Launch</h4>

                <p>Empowering entrepreneurs.</p>

              </div>


            </div>


          </div>

        </div>

      )}


    </section>

  );

}
