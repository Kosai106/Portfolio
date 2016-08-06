import React from 'react';

const Font = () =>
  <section id="main">
    <div className="container">
      <div className="hero">
        <h1 className="headline">Kevin Østerkilde</h1>
        <p className="subline">Designer &amp; Developer</p>
        <hr className="seperator" />
        <p>Currently employed at a Danish startup - <a href="#">Billetto ApS</a></p>
        <hr className="seperator" />
        <div className="social">
          <h3>Find me here too</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-behance"></i>
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
  </section>;

export default Font;
