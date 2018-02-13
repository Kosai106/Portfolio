import React from 'react';
import PropTypes from 'prop-types';
import Pill from './index';

require('./pillsContainer.scss');

const PillContainer = (props) => {
	return (
		<ul className="pill-container">
			{
				props.data.map((item, i) => <Pill key={i} data={item} />)
			}
		</ul>
	);
};

PillContainer.propTypes = {
	data: PropTypes.array.isRequired,
};

export default PillContainer;
