import React from 'react';

const Font = () =>
  <div>
    <section id="hero">
      <div className="container text--center chamber--sides">
        <h1 className="typography--alpha font-white">My name is Kevin Østerkilde, and I create awesome stuff!</h1>
        <p className="typography--regular">Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
        <a href="#work" className="typography--regular cta push--down">Get started</a>
      </div>
    </section>
    <section id="random">
      <div className="container chamber-triple--ends text--center">
        <p>Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid. YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
      </div>
    </section>
    <section className="text--center" id="work">
      <div className="grid">
        <a href="#1">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #1</p>
            <img role="presentation" src="./img/three_dee/SD_02.jpg" />
          </div>
        </a>
        <a href="#2">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #2</p>
            <img role="presentation" src="./img/three_dee/SD_03.jpg" />
          </div>
        </a>
        <a href="#3">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #3</p>
            <img role="presentation" src="./img/three_dee/SD_04.jpg" />
          </div>
        </a>
        <a href="#4">
          <div className="grid__item desk--one-quarter lap--one-half palm--one-whole">
            <p>Project #4</p>
            <img role="presentation" src="./img/three_dee/SD_05.jpg" />
          </div>
        </a>
      </div>
      <div className="grid">
        <a href="#4">
          <div className="grid__item desk--one-half lap--one-whole palm--one-whole image">
            <p>Project #5</p>
            <img role="presentation" src="./img/three_dee/SD_01.jpg" />
          </div>
        </a>
        <div className="grid__item desk--one-half lap--one-whole palm--one-whole">
          <div className="chamber-triple--sides">
            <p className="typography--gamma">Herringbone</p>
            <p className="typography--regular">Been working on a very detailed wood generator, which I recently finished, so I figured I'd better use it for something. Thus the herringbone floor was created.</p>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid__item desk--one-half lap--one-whole palm--one-whole">
          <div className="chamber-triple--sides">
            <p className="typography--gamma">Herringbone</p>
            <p className="typography--regular">Been working on a very detailed wood generator, which I recently finished, so I figured I'd better use it for something. Thus the herringbone floor was created.</p>
          </div>
        </div>
        <a href="#4">
          <div className="grid__item desk--one-half lap--one-whole palm--one-whole image">
            <p>Project #5</p>
            <img role="presentation" src="./img/three_dee/SD_01.jpg" />
          </div>
        </a>
      </div>
    </section>
  </div>;

export default Font;
