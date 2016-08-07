import React from 'react';

// const social = require('json!./../data.json'); // False linting error.

const Font = ({ link, title }) => (
  <section id="main">
    <div className="container">
      <div className="hero">
        <h1 className="headline">Kevin Østerkilde</h1>
        <p className="subline">Designer &amp; Developer</p>
        <hr className="seperator" />
        <p>Currently employed at the Danish startup, <a href={link} target="_blank">{title}</a></p>
        <hr className="seperator" />
        <div className="social">
          <h3>Find me here too</h3>
          <ul>
            <li>
              <a href="https://twitter.com/Kosai106" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/kosai106" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/Kosai106" target="_blank">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="https://www.artstation.com/artist/kosai106" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="http://codepen.io/Kosai106/pens/public/" target="_blank">
                <i className="fa fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/Kevin%C3%98sterkilde" target="_blank">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid">
        <form>
          <div className="inline">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input name="name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <div className="bigBox">
            <textarea name="message" rows="4"></textarea>
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Font;
