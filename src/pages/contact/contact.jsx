import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__headline">
        <p>Get in touch now</p>
        <h1>Recommend Me To Your Leader</h1>
        <p>
          currently looking for internships position, let me at
          jalalajlan@gmail.com or 01160585017
        </p>
      </div>
      <div className="contact__form">
        <h1>Contact Me Now</h1>
        <form>
          <span>Name:</span>
          <input type="text" />
          <span>Message: </span>
          <textarea name="comment" cols="50" rows="6"></textarea>
          <button>Send Email now</button>
        </form>
      </div>
      <p>© Designed by Jalal Ajlan </p>
    </div>
  );
};

export default Contact;
