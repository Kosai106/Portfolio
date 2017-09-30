import React, { PropTypes } from 'react';
import Pill from './index';

const PillContainer = ({ data }) => {
	return (
		<ul className="pill-container">
			{
				data.map((item, i) => <Pill key={i} data={item} />)
			}
		</ul>
	);
};

PillContainer.prototype = {
	data: PropTypes.object.isRequired,
};

export default PillContainer;
