import { useState } from "react";

export default function BecomeMember() {

  const [form, setForm] = useState({

    name: "",
    email: "",
    phone: "",
    country: "",
    sector: ""

  });


  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Application submitted successfully");

    console.log(form);

  };


  return (

    <section id="membership" className="member-section">

      <div className="member-container">


        <div className="member-left animate fade-up">

          <h2>Become a Member</h2>

          <p>

            Join CESACI and connect with Africa’s leading businesses,

            investors, and policymakers shaping the future of trade.

          </p>


          <ul>

            <li>✔ Access regional markets</li>

            <li>✔ Investment opportunities</li>

            <li>✔ Networking & events</li>

            <li>✔ Policy representation</li>

          </ul>


        </div>


        {/* FORM */}


        <form

          className="member-form animate slide-up"

          onSubmit={handleSubmit}

        >


          <input

            type="text"

            name="name"

            placeholder="Full Name"

            required

            onChange={handleChange}

          />


          <input

            type="email"

            name="email"

            placeholder="Email Address"

            required

            onChange={handleChange}

          />


          <input

            type="text"

            name="phone"

            placeholder="Contact Number"

            required

            onChange={handleChange}

          />


          <input

            type="text"

            name="country"

            placeholder="Country"

            required

            onChange={handleChange}

          />


          <select

            name="sector"

            required

            onChange={handleChange}

          >

            <option value="">Select Sector</option>

            <option>Technology</option>

            <option>Trading</option>

            <option>Business Planning</option>

            <option>Chamber Discussions</option>

          </select>


          <button type="submit">

            Submit Application

          </button>


        </form>


      </div>

    </section>

  );

}
