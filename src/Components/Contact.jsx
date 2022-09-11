import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.scss";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaCopy, FaPaste } from "react-icons/fa";
import { BiMobileAlt } from "react-icons/bi";
import Wrap from "../Tools/Wrap";
import { toast } from "wc-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Contactdetail } from "../Contants/SkillsData";
import { useState } from "react";

function Contact() {
  const form = useRef();
  const [isCopyedEmail, setCopyed] = useState(false);
  const [isCopyedMob, setCopyed2] = useState(false);
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

  const handlecopy = (Type) => {
    if (Type === "email") {
      if (isCopyedEmail === false) {
        setCopyed(true);
      } else {
        setCopyed(false);
      }
    } else {
      if (isCopyedMob === false) {
        setCopyed2(true);
      } else {
        setCopyed2(false);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isCopyedEmail || isCopyedMob) {
        setCopyed(false);
        setCopyed2(false);
      }
    }, 2000);
  }, [isCopyedEmail, isCopyedMob]);

  return (
    <React.Fragment>
      <wc-toast></wc-toast>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        id="Contact"
        className="Contact"
      >
        <h1 className="title">Contact</h1>
        <div className="contactdiv1">
          <section>
            {" "}
            <HiMail /> {Contactdetail.email}
            <CopyToClipboard
              className="Copyclipboard"
              onCopy={() => {
                handlecopy("email");
              }}
              text={Contactdetail.email}
            >
              {isCopyedEmail === false ? <FaCopy /> : <FaPaste />}
            </CopyToClipboard>
          </section>
          <section>
            <BiMobileAlt />
            {Contactdetail.MobNo}
            <CopyToClipboard
              className="Copyclipboard"
              onCopy={() => {
                handlecopy("mob");
              }}
              text={Contactdetail.MobNo}
            >
              {isCopyedMob === false ? <FaCopy /> : <FaPaste />}
            </CopyToClipboard>
          </section>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="div2">
            <input
              type="text"
              placeholder="  Your name"
              name="name"
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
