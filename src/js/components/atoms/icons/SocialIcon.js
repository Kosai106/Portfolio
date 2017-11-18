import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({ data }) => {
	const name = data.network.toLowerCase();
	return (
		<li key={data.network}>
			<a className="animated icon" target="_blank" href={data.url}>
				<svg role="img" className="fa" viewBox="0 0 100 100">
					<use xlinkHref={`img/socials/${name}-logo.svg#${data.network}`} />
				</svg>
			</a>
		</li>
	);
};

SocialIcon.prototype = {
	data: PropTypes.object.isRequired,
};

export default SocialIcon;
