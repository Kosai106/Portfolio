import React from 'react';
import PropTypes from 'prop-types';
import PillContainer from '../../atoms/pills/pillContainer';

const Interests = (props) => {
	return (
		<ul className="interests">
			{
				props.data.map((hobby, i) => {
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

Interests.protoTypes = {
	data: PropTypes.object.isRequired,
};

export default Interests;
