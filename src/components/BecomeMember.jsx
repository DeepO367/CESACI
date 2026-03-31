import { useState } from "react";
import MD5 from "crypto-js/md5";

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



/* SIGNATURE GENERATOR */

const generateSignature = (data, passPhrase = "") => {

const orderedKeys = Object.keys(data).sort();

let pfOutput = "";

orderedKeys.forEach(key => {

if (data[key] !== "") {

pfOutput += key + "=" +
encodeURIComponent(data[key].trim())
.replace(/%20/g, "+") + "&";

}

});

let getString = pfOutput.slice(0, -1);

if (passPhrase !== "") {

getString += "&passphrase=" +
encodeURIComponent(passPhrase.trim())
.replace(/%20/g, "+");

}

return MD5(getString).toString();

};

const handleSubmit = (e) => {

e.preventDefault();

const paymentData = {

merchant_id: "10045280",

merchant_key: "vph917s392o8s",

return_url: window.location.origin + "/success",

cancel_url: window.location.origin + "/cancel",

notify_url: window.location.origin + "/notify",

name_first: form.name,

email_address: form.email,

m_payment_id: Date.now().toString(),

amount: "500.00",

item_name: "CESACI Membership",

item_description: "CESACI Chamber Membership"

};

paymentData.signature =
generateSignature(paymentData, "You have paid");

const formElement = document.createElement("form");

formElement.method = "POST";

formElement.action =
"https://sandbox.payfast.co.za/eng/process";

Object.keys(paymentData).forEach(key => {

const input = document.createElement("input");

input.type = "hidden";

input.name = key;

input.value = paymentData[key];

formElement.appendChild(input);

});

document.body.appendChild(formElement);

formElement.submit();

};

return (

<section id="membership" className="member-section">


<div className="member-container">


<div className="member-left">


<h2>Become a Member</h2>


<p>

Join CESACI and unlock regional trade opportunities

</p>

<ul>

            <li>✔ Access regional markets</li>

            <li>✔ Investment opportunities</li>

            <li>✔ Networking & events</li>

            <li>✔ Policy representation</li>

          </ul>

</div>



<form

className="member-form"

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

placeholder="Email"

required

onChange={handleChange}

/>



<input

type="text"

name="phone"

placeholder="Phone"

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

<option value="">

Select Sector

</option>

<option>

Technology

</option>

<option>

Trading

</option>

<option>

Business Planning

</option>

<option>

Chamber Discussions

</option>

</select>



<button type="submit"> 

Pay & Become Member

</button>


</form>


</div>


</section>

);

}
