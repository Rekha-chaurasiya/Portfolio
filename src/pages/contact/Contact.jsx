import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span> Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't Be Shy!</h3>
          <p className="contact__description">
            Feel free to get in touch with me .I am always open to discussing
            new project,creative ideas or oppertunities to be part of your
            vision
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">er.rekhacs@gmail.com</h4>
              </div>
            </div>
            
              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">Call Me</span>
                  <h4 className="info__desc">+91 6391795874</h4>
                </div>
              </div>
           
           
            
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <div>
          <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input__div">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form__control"
                />
              </div>

              <div className="form__input__div">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form__control"
                />
              </div>

              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="form__control"
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                placeholder="Your message"
                className="form__control textarea"
              ></textarea>
            </div>
            <button className="button">
              Send Messages
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
