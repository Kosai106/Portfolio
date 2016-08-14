import React from 'react';
import ReactDOM from 'react-dom';
import All from './all';
// import All from './all';

require('../scss/app.scss');

const app = document.getElementById('app');

ReactDOM.render(
  <All
    title="Billetto"
    link="https://billetto.dk?from=oesterkilde.dk"
  />, app
);
