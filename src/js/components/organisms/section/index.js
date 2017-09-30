import React, { PropTypes } from 'react';

import Header5 from '../../atoms/headers/Header5';

const Section = ({ title, size, noHeader, children }) => {
	const sectionSize = (selector) => {
		switch (selector) {
			case 1:
				return 'one-twelfth';
			case 2:
				return 'two-twelfths';
			case 3:
				return 'three-twelfths';
			case 4:
				return 'four-twelfths';
			case 5:
				return 'five-twelfths';
			case 6:
				return 'six-twelfths';
			case 7:
				return 'seven-twelfths';
			case 8:
				return 'eight-twelfths';
			case 9:
				return 'nine-twelfths';
			case 10:
				return 'ten-twelfths ';
			case 11:
				return 'eleven-twelfths';
			case 12:
				return 'one-whole';
			default:
				return 'one-whole';
		}
	};

	return (
		<div className={`grid__item ${sectionSize(size)} chamber--bottom`}>
			{
				(noHeader === true) ? null : <Header5 title={title} />
			}
			{children}
		</div>
	);
};

Section.prototype = {
	title: PropTypes.string,
	size: PropTypes.number,
	noHeader: PropTypes.bool,
	children: PropTypes.children,
};

Section.defaultProps = {
	size: 12,
	noHeader: false,
};

export default Section;
