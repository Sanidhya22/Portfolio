import React, { Component, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.scss";
import { motion } from "framer-motion";

import { HiMail } from "react-icons/hi";
import { BiMobileAlt } from "react-icons/bi";
import Wrap from "../Tools/Wrap";
import { toast } from "wc-toast";

function Contact() {
  const form = useRef();

  const handleEmojiToast = () => {
    toast("Message Sent", { icon: { type: "custom", content: "😃" } });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          handleEmojiToast();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <wc-toast></wc-toast>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        id="Contact"
        className="Contact"
      >
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
      </motion.div>
    </React.Fragment>
  );
}

export default Wrap(Contact, "Contact");
