import React from 'react';
import ReactDOM from 'react-dom';
import Font from './font';
// import All from './all';

require('../scss/app.scss');

const app = document.getElementById('app');

ReactDOM.render(
  <Font
    title="Billetto"
    link="https://billetto.dk?from=oesterkilde.dk"
  />, app
);
