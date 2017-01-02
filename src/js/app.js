import React from 'react';
import { render } from 'react-dom';
import All from './all';

require('../scss/app.scss');

render(
	<All
		desc="Currently employed at the Swedish startup"
		title="Quixel"
		link="//quixel.se?from=oesterkilde.dk"
	/>, document.getElementById('app')
);
