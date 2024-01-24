//React Imports
import React, { useEffect, useState } from "react";

//CSS
import "../../Styles/Contact.css";

/**
 * Renders the title and blurb.
 */
const ContactIntro = () => {
  return (
    <div className="contact-intro">
      <h1 className="heading">Contact</h1>
      <div className="container">
        <p className="contact-blurb">
          Thank you for visiting my website. I would love to hear from you!
          Please feel free to contact me using this form, or by any of the
          following methods.
        </p>
        <p className="contact-info">
          Hunter Groff
          <br />
          94 Hammond St, Apt 1, Boston, MA, 02120
          <br />
          huntergroff22@gmail.com
          <br />
          (802) - 598 - 8758
          <br />
        </p>
      </div>
    </div>
  );
};

const Contact = (props) => {
  useEffect(() => {
    props.setHome(false);
  });

  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };
  const [message, setMessage] = useState("");
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  //when the send button is clicked:
  const handleSubmit = (event) => {
    event.preventDefault();

    const templateId = "template_wnhslhf";
    const variables = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };
    //If all fields aren't filled out, alert and stop.
    if (!validateForm(variables)) {
      alert("Please fill out all fields before sending your email!");
      return;
    }
    sendFeedback(templateId, variables);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_qf0w0ih", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        alert(
          "Thanks for your email! You should recieve a confirmation email, and we'll get back to you as soon as possible."
        );
      })
      .catch((err) => {
        console.error("Email failed to send:", err);
        alert(
          "Your email failed to send. We apologize for the inconvenience! Please try again, or email us directly at mia@synergydance.org."
        );
      });
  };

  //Returns true if there are no blank fields.
  const validateForm = (variables) => {
    return !(
      variables.from_name === "" ||
      variables.from_phone === "" ||
      variables.from_email === "" ||
      variables.message === ""
    );
  };

  return (
    <div id="contact">
      <ContactIntro />
      <div className="contact-form container">
        <form>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleNameChange}
            value={name}
            placeholder="Name"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control"
            name="phone"
            onChange={handlePhoneChange}
            value={phone}
            placeholder="Phone Number"
          />
          <textarea
            type="text"
            name="message"
            className="form-control"
            onChange={handleMessageChange}
            value={message}
            placeholder="Write a message..."
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
