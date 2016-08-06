import React from 'react';
import { StickyContainer } from 'react-sticky';
import Navigation from './navigation';
import Hero from './hero';
import Work from './sections/work';
import Random from './sections/random';
import About from './sections/about';
import Styleguide from './styleguide';

const All = () =>
  <StickyContainer>
    <Hero name="Kevin Østerkilde" ctaName="Get started" ctaUrl="#about" />
    <Navigation />
    <Random />
    <Work />
    <Styleguide />
    <About />
  </StickyContainer>;


export default All;
