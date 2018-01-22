import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from '../../atoms/icons/SocialIcon';

const Socials = (props) => {
	return (
		<ul>
			{
				props.data.map((item, i) => <SocialIcon key={i} data={item} />)
			}
		</ul>
	);
};

Socials.protoTypes = {
	data: PropTypes.array.isRequired,
};

export default Socials;
