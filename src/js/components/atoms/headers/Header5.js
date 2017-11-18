import React from 'react';
import PropTypes from 'prop-types';

const Header5 = ({ title, color }) => {
	return (
		<h5 style={{ color: color }}>{title}:</h5>
	);
};

Header5.prototype = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
};

Header5.defaultProps = {
	title: 'Hello world',
	color: '#101012',
};

export default Header5;
