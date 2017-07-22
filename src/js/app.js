import React from 'react';
import { render } from 'react-dom';
import All from './all';
import Resume from './resume';

require('../scss/app.scss');
import data from '../json/resume.json';

const Console = console;
const message = `Hi there stranger,

Thanks for looking at my site.
I'm available for hire to do both web-stuff and 3D art!
Contact me via the form or directly at kevin@oesterkilde.dk

You can find my resume at www.oesterkilde.dk/json/resume.json

Cheers,
Kevin Østerkilde.`;
Console.log(message);

render(
	<All
		desc="Currently looking for new oppertunities"
		title={data.work[0].company}
		link={data.work[0].website}
		data={data.basics.profiles}
	/>, document.getElementById('app')
);

/*
render(
	<Resume />, document.getElementById('app')
);
*/
