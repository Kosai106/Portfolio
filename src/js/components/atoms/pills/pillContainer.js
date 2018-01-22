import React from 'react';
import PropTypes from 'prop-types';
import Pill from './index';

const PillContainer = (props) => {
	return (
		<ul className="pill-container">
			{
				props.data.map((item, i) => <Pill key={i} data={item} />)
			}
		</ul>
	);
};

PillContainer.protoTypes = {
	data: PropTypes.object.isRequired,
};

export default PillContainer;
