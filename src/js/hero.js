import React from 'react';

const Hero = function Hero() {
  return (
    <section id="hero">
      <div className="container text--center chamber--sides">
        <h1 className="typography--alpha font-white">
          My name is Kevin Østerkilde, and I create awesome stuff!
        </h1>
        <p className="typography--regular">Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
        <a href="#work" className="typography--regular cta push--down">Get started</a>
      </div>
    </section>
  );
};

export default Hero;
