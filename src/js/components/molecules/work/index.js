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
function fulltime(x) {
	return (
		(x.fulltime === true || null) ? 'Full time' : 'Part time'
	);
}
function highlights(x) {
	return (
		_.isEmpty(x.highlights) ? null : x.highlights.map((highlight, i) => {
			return <li key={i} className="typography--milli">{highlight}</li>;
		})
	);
}

const Work = (props) => {
	return (
		<Fragment>
			{
				props.data.filter((job) => job.type === 'web').map((job, i) => {
					return (
						<div key={i} className="chamber--bottom">
							<span>
								<a href={job.website} target="_blank" className="push--right typography--eta">{job.company}</a>
								<span className="push--right">&middot;</span>
								<span>{job.position}</span>
							</span>
							<span className="typography--milli" style={{ display: 'block' }}>
								{startDate(job)} - {endDate(job)}
								<span className="push--sides">&middot;</span>
								{fulltime(job)}
							</span>
							<p dangerouslySetInnerHTML={{ __html: job.summary }}></p>
							<ul>
								{highlights(job)}
							</ul>
						</div>
					);
				})
			}
		</Fragment>
	);
};

Work.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Work;
