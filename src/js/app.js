import React from 'react';
import ReactDOM from 'react-dom';
import All from './all';
// import All from './all';

require('../scss/app.scss');

const app = document.getElementById('app');

ReactDOM.render(
  <All
    desc="Currently employed at the Swedish startup"
    title="Quixel"
    link="//quixel.se?from=oesterkilde.dk"
  />, app
);
