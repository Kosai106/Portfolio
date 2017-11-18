import React from 'react';
import PropTypes from 'prop-types';
import PillContainer from '../../atoms/pills/pillContainer';
import Header5 from '../../atoms/headers/Header5';

const Skills = ({ data }) => {
	return (
		<div>
			{
				data.map((skill, i) => {
					return (
						<div key={i} className="chamber--bottom">
							<Header5 title={skill.name} />
							<span>{skill.level}</span>
							<PillContainer data={skill.keywords} />
						</div>
					);
				})
			}
		</div>
	);
};

Skills.prototype = {
	data: PropTypes.object.isRequired,
};

export default Skills;
