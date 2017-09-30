import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './js/screens/index';

require('./scss/app.scss');

console.log('\n\n');
console.group('%c%s', 'color: #FC3565; font-size: 24px; font-family: "Varela Round", "Roboto", sans-serif;', 'Resume for nerds:');
console.log('%c%s', 'color: #FFF; background-color: #FC3565; padding: 6px; font-size: 18px; font-family: "Varela Round", "Roboto", sans-serif;', 'https://oesterkilde.dk/resume.json');
console.groupEnd();
console.log('\n\n');

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
