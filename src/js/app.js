import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './screens/index';

require('../scss/app.scss');

const Console = console;

Console.log('\n\n');
Console.group('%c%s', 'color: #FC3565; font-size: 24px; font-family: "Varela Round", "Roboto", sans-serif;', 'Resume for nerds:');
Console.log('%c%s', 'color: #FFF; background-color: #FC3565; padding: 6px; font-size: 18px; font-family: "Varela Round", "Roboto", sans-serif;', 'https://oesterkilde.dk/resume.json');
Console.groupEnd();
Console.log('\n\n');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
