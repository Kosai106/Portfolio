import React from 'react';
import moment from 'moment';
import _ from 'lodash';

require('../scss/app.scss');
require('../scss/modules/resume.scss');

import data from '../json/resume.json';

export default class Resume extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const endDate = (x) => {
			return (
				_.isEmpty(x.endDate) ? 'Now' : `${moment(x.endDate, 'YYYY-MM-DD').format('MMM YYYY')}`
			);
		};
		const startDate = (x) => {
			return (
				moment(x.startDate, 'YYYY-MM-DD').format('MMM YYYY')
			);
		};

		const profiles = data.basics.profiles.map((social) => {
			return (
				<li key={social.network}>
					<a target="_blank" href={social.url}>
						{social.network}
					</a>
				</li>
			);
		});

		const languages = data.languages.map((lang) => {
			return (
				<li key={lang.language}>
					<b>{lang.language}</b> &middot; {lang.fluency}
				</li>
			);
		});

		const interests = data.interests.map((hobby) => {
			const keywords = hobby.keywords.map((key) => {
				return <li key={key}>{key}</li>;
			});

			return (
				<div key={hobby.name}>
					<b>{hobby.name}</b>
					<ul>
						{keywords}
					</ul>
				</div>
			);
		});

		const references = data.references.map((ref) => {
			return (
				<blockquote key={ref.name}>
					<p>{ref.reference}</p>
					<span><em>- {ref.name}</em>s</span>
				</blockquote>
			);
		});

		const work = data.work.map((job) => {
			const highlights = job.highlights.map((highlight) => {
				return <li key={highlight}>{highlight}</li>;
			});

			return (
				<div key={job.company}>
					<a href={job.website}><h5>{job.company}</h5></a>
					<p>{job.position}</p>
					<p>{startDate(job)} - {endDate(job)}</p>
					<p>{job.summary}</p>
					<ul>
						{highlights}
					</ul>
				</div>
			);
		});

		const education = data.education.map((item) => {
			const courses = item.courses.map((course) => {
				return <li key={course}>{course}</li>;
			});

			return (
				<div key={item.institution}>
					<h5>{item.institution}</h5>
					<p>{item.area}</p>
					<span>{startDate(item)} - {endDate(item)}</span>
					<ul>
						{courses}
					</ul>
				</div>
			);
		});

		const skills = data.skills.map((skill) => {
			const keywords = skill.keywords.map((key) => {
				return <li key={key}>{key}</li>;
			});

			return (
				<div key={skill.name}>
					<h5>{skill.name}</h5>
					<span>{skill.level}</span>
					<ul>
						{keywords}
					</ul>
				</div>
			);
		});

		return (
			<div id="resume" className="chamber-double--ends">
				<div className="container grid">
					<div className="header chamber--ends">
						<img src={data.basics.picture} alt={data.basics.name} className="avatar push--right hidden" />
						<div className="details">
							<div className="title chamber--bottom">
								<span className="typography--kilo">{data.basics.name}</span>
								<span className="typography--gamma muted">{data.basics.label}</span>
							</div>
							<div className="basic_details chamber-half--bottom text--center">
								<a href={data.basics.website} className="grid__item one-third">{data.basics.website}</a>
								<a href={`mailto:${data.basics.email}`} className="grid__item one-third">{data.basics.email}</a>
								<a href={`tel:${data.basics.phone}`} className="grid__item one-third">{data.basics.phone}</a>
							</div>
							<p className="chamber-double--sides chamber-half--bottom">{data.basics.summary}</p>
							<hr />
						</div>
					</div>
					<div className="grid__item one-half">
						{work}
					</div>
					<div className="grid__item one-half">
						{education}
						{skills}
					</div>
					<div className="header">
						<ul>
							{profiles}
						</ul>
						<ul>
							{languages}
						</ul>
						{interests}
						{references}
					</div>
				</div>
			</div>
		);
	}
}
