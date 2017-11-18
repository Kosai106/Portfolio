import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ data }) => {
	return <li className="typography--milli pill">{data}</li>;
};

Pill.prototype = {
	data: PropTypes.object.isRequired,
};

export default Pill;
