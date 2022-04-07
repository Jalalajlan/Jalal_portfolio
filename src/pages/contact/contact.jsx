import React, { useRef, useState } from "react";
import Checked from "../../images/checked.png";
import CloseIcon from "../../images/close-svgrepo-com.svg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import "./contact.scss";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [modal, setModal] = useState({ open: false, message: "fail" });
  const contactForm = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_fkzhppp",
        "template_305q5am",
        contactForm.current,
        "user_tM6I16Kw3im18IEq8W31m"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setModal({ open: true, message: "success" });
            reset({ name: "", message: "" });
          } else {
            setModal({ open: true, message: "fail" });
            reset({ name: "", message: "" });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  const renderModal = () => {
    if (modal.open) {
      if (modal.message === "success") {
        return <Modal message={"success"} closeModal={closeModal} />;
      } else {
        return <Modal message={"fail"} closeModal={closeModal} />;
      }
    }
  };

  return (
    <div id="contact" className="contact">
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
        <form ref={contactForm} onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <span>name is required</span>}
          <span>Name:</span>
          <input type="text" {...register("name", { required: true })} />
          <span>Message: </span>
          <textarea
            {...register("message", { required: true })}
            cols="50"
            rows="6"
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Email Now!
          </button>
        </form>
      </div>
      {renderModal()}
      <p>© Designed by Jalal Ajlan </p>
    </div>
  );
};

const Modal = ({ message, closeModal }) => {
  return (
    <div className="contact__modal" onClick={() => closeModal()}>
      <div className="modal-container">
        {message === "success" ? (
          <>
            <img src={Checked} alt="success message" className="success-icon" />
            <h1>Email Sent</h1>
            <p>Thank you for being here.. will respond to your email</p>
            <p>Jalal Ajlan</p>
          </>
        ) : (
          <>
            <h1>Seems somthing is worng </h1>
            <p> you can contact me directly from my email ... Thank you</p>
          </>
        )}
        <img
          src={CloseIcon}
          alt="modal close icon"
          className="close-icon"
          onClick={() => closeModal()}
        />
      </div>
    </div>
  );
};

export default Contact;
