import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Pill from '../../atoms/pills';

const Profiles = (props) => {
	return (
		<Fragment>
			{
			props.data.map((item, i) => (
					(props.isLink === true) ? <a key={i} target="_blank" href={`${item.url}${item.username}`}><Pill data={item.network} /></a> : <Pill key={i} data={item.network} />
				))
			}
		</Fragment>
	);
};

Profiles.protoTypes = {
	data: PropTypes.object.isRequired,
	isLink: PropTypes.bool,
};

Profiles.defaultProps = {
	isLink: false,
};

export default Profiles;
