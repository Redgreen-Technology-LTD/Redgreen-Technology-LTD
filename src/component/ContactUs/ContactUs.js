import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="py-10 lg:py-20 bg-gray-200">
      <div class="contain">
        <div class="wrapper-main">
          <div class="form">
            <h4 className="text-start text-4xl">GET IN TOUCH</h4>
            <h2 class="form-headline">Send us a message</h2>
            <form
              id="submit-form"
              action="https://formspree.io/f/mpzneazq"
              method="POST"
            >
              <p>
                <input
                  id="name"
                  name="name"
                  class="form-input"
                  type="text"
                  required
                  placeholder="Your Name*"
                />
                <small class="name-error"></small>
              </p>
              <p>
                <input
                  id="email"
                  class="form-input"
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email*"
                />
                <small class="name-error"></small>
              </p>
              <p class="full-width">
                <input
                  id="company-name"
                  class="form-input"
                  type="text"
                  name="company-name"
                  placeholder="Company Name*"
                  required
                />
                <small></small>
              </p>
              <p class="full-width">
                <textarea
                  name="message"
                  minlength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  required
                ></textarea>
                <small></small>
              </p>
              <p class="full-width">
                <input
                  type="submit"
                  class="submit-btn"
                  value="Submit"
                  onclick="checkValidations()"
                />
              </p>
            </form>
          </div>

          <div class="contacts contact-wrapper">
            <ul>
              <li>
                We've driven online revenues of over{' '}
                <span class="highlight-text-grey">$2 billion</span> for our
                clients. Ready to know how we can help you?
              </li>
              <span class="hightlight-contact-info">
                <li class="email-info">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{' '}
                  info@redgreen.co
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>{' '}
                  <span class="highlight-text">+8801 722 999 222</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
