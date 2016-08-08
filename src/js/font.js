import React from 'react';

const data = require('json!./../json/data.json'); // False linting error.

// Fix this fucking shit
const Stuff = () => data.social.map((item) => {
  return (
    <li key={item.id}>
      <a href={item.url}>
        <i className={`fa ${item.icon}`}></i>
      </a>
    </li>
  );
});

console.log(Stuff);

const Font = ({ link, title }) => (
  <section id="main">
    <div className="container">
      <div className="hero">
        <h1 className="headline">Kevin &Oslash;sterkilde</h1>
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
              <a href="https://www.instagram.com/kosai106/" target="_blank">
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
            <li>
              <a href="https://www.artstation.com/artist/kosai106" target="_blank">
                <i className="fa fa-artstation"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid">
        <form action="https://formspree.io/kevin@oesterkilde.dk" method="POST">
          <input type="hidden" name="_next" value="#" />
          <input type="hidden" name="_subject" value="Website Contact Form" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <div className="inline">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <div className="bigBox">
            <textarea name="message" id="message" rows="4" required />
            <button type="submit" value="Send">Send message</button>
          </div>
        </form>
      </div>
    </div>
    <footer>
      <p>&copy; Oesterkilde.dk 2016</p>
    </footer>
    <div id="success"></div>
  </section>
);

Font.propTypes = {
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Font;
