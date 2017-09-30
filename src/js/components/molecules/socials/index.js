import React, { PropTypes } from 'react';
import SocialIcon from '../../atoms/icons/SocialIcon';

const Socials = ({ data }) => {
	return (
		<ul>
			{
				data.map((item, i) => <SocialIcon key={i} data={item} />)
			}
		</ul>
	);
};

Socials.prototype = {
	data: PropTypes.array.isRequired,
};

export default Socials;
