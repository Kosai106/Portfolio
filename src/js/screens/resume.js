import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';

require('../../scss/app.scss');
require('../../scss/modules/resume.scss');

import data from '../../json/resume.json';

export default class Resume extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const endDate = (x) => {
			return (
				_.isEmpty(x.endDate) ? 'Now' : `${moment(x.endDate, 'YYYY-MM-DD').format('MMM. YYYY')}`
			);
		};
		const startDate = (x) => {
			return (
				moment(x.startDate, 'YYYY-MM-DD').format('MMM. YYYY')
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
				<div key={hobby.name} className="grid__item one-third">
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
				<div key={job.company} className="chamber--bottom">
					<span>
						<a href={job.website} target="_blank" className="push--right typography--eta">{job.company}</a>
						<span className="push--right">&middot;</span>
						<span>{job.position}</span>
					</span>
					<span className="typography--milli" style={{ display: 'block' }}>{startDate(job)} - {endDate(job)}</span>
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
				<div key={item.institution} className="chamber--bottom">
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
				<div key={skill.name} className="chamber--bottom">
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
					<Link to='/' className="resume">Return</Link>
					<div className="header chamber--ends">
						<img src={data.basics.picture} alt={data.basics.name} className="avatar push--right hidden" />
						<div className="details">
							<div className="title chamber--bottom">
								<span className="typography--kilo">{data.basics.name}</span>
								<span className="typography--gamma muted">{data.basics.label}</span>
							</div>
							<div className="basic_details chamber-half--bottom text--center">
								<span className="grid__item one-third">
									<a href={data.basics.website} target="_blank" className="typography--eta">{data.basics.website}</a>
								</span>
								<span className="grid__item one-third">
									<a href={`mailto:${data.basics.email}`} className="typography--eta">{data.basics.email}</a>
								</span>
								<span className="grid__item one-third">
									<a href={`tel:${data.basics.phone}`} className="typography--eta">{data.basics.phone}</a>
								</span>
							</div>
							<p className="chamber-double--sides chamber-half--bottom" dangerouslySetInnerHTML={{ __html: data.basics.summary }}></p>
							<hr />
						</div>
					</div>
					<div className="grid__item three-fifths">
						<h5>Experience:</h5>
						{work}
						<hr className="push-double--bottom" style={{ width: '100%' }} />
						<div className="grid__item three-fifths" style={{ paddingLeft: '0' }}>
							<h5>Languages:</h5>
							<ul>
								{languages}
							</ul>
						</div>
						<div className="grid__item two-fifths">
							<h5>Find me here:</h5>
							<ul>
								{profiles}
							</ul>
						</div>
						<div className="grid__item one-whole" style={{ paddingLeft: '0' }}>
							<h5>References:</h5>
							{references}
						</div>
					</div>
					<div className="grid__item two-fifths">
						<h5>Education:</h5>
						{education}
						<hr className="push-double--bottom" style={{ width: '100%', marginLeft: '-24px' }} />
						<h5>Skills:</h5>
						{skills}
					</div>
					<hr className="push-double--bottom" style={{ width: 'calc(100% - (24px * 2))' }} />
					<div className="grid__item one-whole chamber--bottom">
						<h5>Interests:</h5>
						<ul>
							{interests}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
