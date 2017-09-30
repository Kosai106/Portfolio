import React, { PropTypes } from 'react';
import Pill from '../../atoms/pills';

const Profiles = ({ data, isLink }) => {
	return (
		<div>
			{
				data.map((item, i) => (
					(isLink === true) ? <a key={i} target="_blank" href={item.url}><Pill data={item.network} /></a> : <Pill key={i} data={item.network} />
				))
			}
		</div>
	);
};

Profiles.prototype = {
	data: PropTypes.object.isRequired,
	isLink: PropTypes.bool,
};

Profiles.defaultProps = {
	isLink: false,
};

export default Profiles;
