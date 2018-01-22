import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

function startDate(x) {
	return (
		moment(x.startDate, 'YYYY-MM-DD').format('MMM. YYYY')
	);
}
function endDate(x) {
	return (
		_.isEmpty(x.endDate) ? 'Present' : `${moment(x.endDate, 'YYYY-MM-DD').format('MMM. YYYY')}`
	);
}

const Education = (props) => {
	return (
		<Fragment>
			{
				props.data.map((item, i) => {
					const courses = item.courses.map((course, x) => {
						return <li key={x} className="typography--milli">{course}</li>;
					});

					return (
						<div key={i} className="chamber--bottom">
							<h5>{item.institution}</h5>
							<span>{item.area}</span>
							<br />
							<span className="typography--milli">{startDate(item)} - {endDate(item)}</span>
							<ul>
								{courses}
							</ul>
						</div>
					);
				})
			}
		</Fragment>
	);
};

Education.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Education;
