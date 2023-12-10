import React from "react";
import "./Contact.css"
import {
  Drafts,
  Twitter,
  Instagram,
  YouTube,
  Phone,
  Facebook,
  LinkedIn,
   NearMe,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Dont be Shy!</h3>
          <p className="contact_description">
            Feel free to get in touch with me, I am always open to discussing
            new projects,creative ideas or opportunities to be part of your
            visions
          </p>
          <div className="contact_info">
            <div className="info_item">
              <Drafts className="info_icon" />
              <div>
                <span className="info_title">Mail Me </span>
                <h4 className="info_desc">haiderali2275@gmail.com</h4>
              </div>
            </div>
            <div className="info_item">
              <Phone className="info_icon" />
              <div>
                <span className="info_title">Call Me </span>
                <h4 className="info_desc">+92 3002420112</h4>
              </div>
            </div>
          </div>
          <div className="contact_socials">
            <a href="https://facebook.com" className="contact_social-link">
              <Facebook />
            </a>{" "}
            <a href="https://twitter.com" className="contact_social-link">
              <Twitter />
            </a>{" "}
            <a href="https://instagram.com" className="contact_social-link">
              <Instagram />
            </a>{" "}
            <a href="https://youtube.com" className="contact_social-link">
              <YouTube />
            </a>{" "}
            <a href="https://linkedin.com" className="contact_social-link">
              <LinkedIn />
            </a>
          </div>
        </div>
        <form className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form_control"
              />
            </div>
            <div className="form_input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form_control"
              />
            </div>
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form_control"
              />
            </div>
          </div>
          <div className="form_input-div">
              <textarea placeholder="Your Message" className="form_control textarea"/>
            </div>
            <button className="btn" >
    Send Message
    <span className="btn_icon contact_btn-icon">
<NearMe/>

    </span>
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
