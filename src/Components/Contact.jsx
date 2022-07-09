import React, { Component, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Styles/Contact.scss";
import { HiMail } from "react-icons/hi";
import { BiMobileAlt } from "react-icons/bi";
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from "../emailkeys";

import Wrap from "./Tools/Wrap";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="Contact">
      <h1>Contact</h1>
      <div className="contactdiv1">
        <section>
          {" "}
          <HiMail /> sanidhyanigam99@gmail.com
        </section>
        <section>
          <BiMobileAlt />
          +91 9993481424
        </section>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="div2">
          <input
            type="text"
            placeholder="  Your name"
            name="name"
            pattern="[A-Za-z0-9]{1,20}"
            required="required"
          />
        </div>
        <div className="div2">
          <input
            type="email"
            required="required"
            placeholder="  Your email"
            name="email"
          />
        </div>
        <div className="div2">
          <textarea
            placeholder="  Message"
            pattern="[A-Za-z0-9]{1,20}"
            required="required"
            name="message"
          />
        </div>

        <button type="submit" value="Send Message">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Wrap(Contact, "Contact");
