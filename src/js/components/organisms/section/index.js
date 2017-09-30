import React, { PropTypes } from 'react';

import Header5 from '../../atoms/headers/Header5';

const Section = ({ title, size, noHeader, children }) => {
	const sectionSize = (selector) => {
		switch (selector) {
			case 1:
				return 'one-twelfth';
				break;
			case 2:
				return 'two-twelfths';
				break;
			case 3:
				return 'three-twelfths';
				break;
			case 4:
				return 'four-twelfths';
				break;
			case 5:
				return 'five-twelfths';
				break;
			case 6:
				return 'six-twelfths';
				break;
			case 7:
				return 'seven-twelfths';
				break;
			case 8:
				return 'eight-twelfths';
				break;
			case 9:
				return 'nine-twelfths';
				break;
			case 10:
				return 'ten-twelfths ';
				break;
			case 11:
				return 'eleven-twelfths';
				break;
			case 12:
				return 'one-whole';
				break;
			default:
				return 'one-whole';
				break;
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
