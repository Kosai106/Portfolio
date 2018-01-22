import React from 'react';
import PropTypes from 'prop-types';

const Languages = (props) => {
	return (
		<ul>
			{
				props.data.map((lang, i) => (
					<li key={i}>
						<b>{lang.language}</b> &middot; {lang.fluency}
					</li>
				))
			}
		</ul>
	);
};

Languages.protoTypes = {
	data: PropTypes.array.isRequired,
};

export default Languages;
