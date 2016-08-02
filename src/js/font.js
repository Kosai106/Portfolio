import React from 'react';
import { StickyContainer } from 'react-sticky';

const Font = () => {
  return (
    <StickyContainer>
      <section id="hero">
        <div className="container text--center chamber-double--sides">
          <h1>My name is Kevin Østerkilde, and I create awesome stuff!</h1>
          <p>Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid. YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
        </div>
      </section>
      <section id="random">
        <div className="container text--center chamber-triple--ends chamber-double--sides">
          <p>Blog tousled man bun bitters fap, retro letterpress. Try-hard truffaut raw denim brunch, plaid dreamcatcher migas messenger bag fanny pack. Godard man braid. YOLO distillery cardigan, brunch chia swag selfies post-ironic ennui 90's biodiesel drinking vinegar +1 small batch. Fixie kale chips leggings mustache post-ironic biodiesel, artisan tattooed.</p>
        </div>
      </section>
    </StickyContainer>
  );
};

export default Font;
