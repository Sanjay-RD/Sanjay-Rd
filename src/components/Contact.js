import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_runuwh9",
        "template_2zrx6ao",
        e.target,
        "user_oQlhpbD7ZGcVwcnmalrpL"
      )
      .then(
        function (response) {
          setSuccess(true);
        },
        function (err) {
          setSuccess(true);
          setErrorMsg("Server Error");
        }
      );
    e.target.reset();
  };

  setTimeout(() => {
    setSuccess(false);
  }, 5000);

  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

        <form id="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input className="input-field" type="text" name="name" required />

          <label>Subject</label>
          <input className="input-field" type="text" name="subject" required />

          <label>Email</label>
          <input className="input-field" type="email" name="email" required />

          <label>Message</label>
          <textarea className="input-field" name="message" required></textarea>

          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
      {success && (
        <div className={errorMsg ? "message danger" : "message"}>
          <p>{errorMsg ? errorMsg : "Message Send"}</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
