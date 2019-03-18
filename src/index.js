import React from 'react';
import { render } from 'react-dom';

require('./scss/new.scss');

/* eslint-disable no-console */
console.log('\n\n');
console.group('%c%s', 'color: #1e1efd; font-size: 24px; font-family: "Varela Round", "Roboto", sans-serif;', 'Resume for nerds:');
console.log('%c%s', 'color: #FFF; background-color: #1e1efd; padding: 6px; font-size: 18px; font-family: "Varela Round", "Roboto", sans-serif;', 'https://oesterkilde.dk/resume.json');
console.groupEnd();
console.log('\n\n');
/* eslint-enable no-console */

render(
	<main>
		<h1>Kevin Østerkilde</h1>
		<p>
			I solve problems by designing and building beautiful digital experiences
			for both mobile and the web.
		</p>
		<br />
		<p>New site coming soon.</p>
		<br />
	</main>,
	document.getElementById('app')
);
