import React from 'react';
import PropTypes from 'prop-types';
import PillContainer from '../../atoms/pills/pillContainer';

const Interests = ({ data }) => {
	return (
		<ul className="interests">
			{
				data.map((hobby, i) => {
					return (
						<div key={i} className="grid__item one-third">
							<b>{hobby.name}</b>
							<PillContainer data={hobby.keywords} />
						</div>
					);
				})
			}
		</ul>
	);
};

Interests.prototype = {
	data: PropTypes.object.isRequired,
};

export default Interests;
