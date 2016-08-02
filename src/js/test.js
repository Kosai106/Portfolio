import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const Test = () => {
  return (
    <StickyContainer>
      <section id="hero">
        <div className="container text--center chamber-triple--ends chamber-double--sides">
          <h1 className="typography--alpha font-white">My name is Kevin Østerkilde, and I create awesome stuff!</h1>
          <p className="typography--gamma font-white">Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid. YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
          <a href="#work" className="typography--regular cta push--down">Get started</a>
        </div>
      </section>
      <Sticky>
        <nav className="navigation">
          <div className="container">
            <div className="logo">
              <a href="#">Oesterkilde</a>
            </div>
            <div className="links">
              <a href="#" className="active">Portfolio</a>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>
      </Sticky>
      <section id="random">
        <div className="container text--center chamber-triple--ends chamber-double--sides">
          <p>Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid. YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
        </div>
      </section>
      <section id="styleguide">
        <div className="container">
          <div className="row">
            <div className="copy">
              <h1 className="typography--alpha">Header 1</h1>
              <h2 className="typography--beta">Header 2</h2>
              <h3 className="typography--gamma">Header 3</h3>
              <h4 className="typography--delta">Header 4</h4>
              <h5 className="typography--eta">Header 5</h5>
              <h6 className="typography--theta">Header 6</h6>
              <p>This is a paragraph, there are many like it, but this one is mine.</p>
              <a href="#">Hyperlink</a>
            </div>
            <div className="list">
              <ul>
                <li className="typography--regular">Unordered list #1</li>
                <li className="typography--regular">Unordered list #3</li>
                <li className="typography--regular">Unordered list #4</li>
              </ul>
              <li className="typography--regular">Ordered list #1</li>
              <li className="typography--regular">Ordered list #2</li>
              <li className="typography--regular">Ordered list #3</li>
            </div>
            <div className="colors">
              <div className="col1"></div>
              <div className="col2"></div>
              <div className="col3"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="grid text--center container">
          <div className="grid__item one-half">
            <div className="grid__item one-whole avatar">
              <img src="./img/avatars/Kevin.png" alt="Portrait" />
            </div>
            <div className="grid__item one-whole details">
              <h3 className="text--center">About me</h3>
              <li>Age: 24</li>
              <li>Nationality: Danish</li>
              <li>Current employer: Billetto ApS</li>
            </div>
          </div>
          <div className="grid__item one-half">
            <p>Hello world</p>
          </div>
        </div>
      </section>
    </StickyContainer>
  );
};

export default Test;
