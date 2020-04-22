import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="postcard-container">
        <div className="postcard">
          <div className="postcard-left">
            <div className="mountain-man">
              <div className="mountain-man-overlay"></div>
            </div>
          </div>
          <div className="postcard-right">
            <form action="">
              <input placeholder="name" type="text" />
              <input placeholder="email" type="text" />
              <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;