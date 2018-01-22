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

const Work = (props) => {
	return (
		<Fragment>
			{
				props.data.filter((job) => job.business !== 'game' || null || undefined).map((job, i) => {
					const highlights = job.highlights.map((highlight, x) => {
						return <li key={x} className="typography--milli">{highlight}</li>;
					});

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
								{highlights}
							</ul>
						</div>
					);
				})
			}
		</Fragment>
	);
};

Work.protoTypes = {
	data: PropTypes.array.isRequired,
};

export default Work;
