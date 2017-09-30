import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';

// Atoms
import Header5 from '../components/atoms/headers/Header5';

// Molecules
import Skills from '../components/molecules/skills';
import Interests from '../components/molecules/interests';
import Profiles from '../components/molecules/profiles';

// Organisms
import Section from '../components/organisms/section';

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
				_.isEmpty(x.endDate) ? 'Present' : `${moment(x.endDate, 'YYYY-MM-DD').format('MMM. YYYY')}`
			);
		};
		const startDate = (x) => {
			return (
				moment(x.startDate, 'YYYY-MM-DD').format('MMM. YYYY')
			);
		};
		const fulltime = (x) => {
			return (
				(x.fulltime === true || null) ? 'Full time' : 'Part time'
			);
		};
		const website = (x) => {
			return (
				x.replace(/^https?:\/\//, 'www.').replace(/\/$/, '')
			);
		};

		const languages = data.languages.map((lang) => {
			return (
				<li key={lang.language}>
					<b>{lang.language}</b> &middot; {lang.fluency}
				</li>
			);
		});

		const references = data.references.map((ref) => {
			return (
				<blockquote key={ref.name}>
					<p>{ref.reference}</p>
					<span className="typography--milli"><em>- {ref.name}</em></span>
				</blockquote>
			);
		});

		const work = data.work.filter((job) => job.business !== 'game' || null || undefined).map((job) => {
			const highlights = job.highlights.map((highlight) => {
				return <li key={highlight} className="typography--milli">{highlight}</li>;
			});

			return (
				<div key={job.company} className="chamber--bottom">
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
		});

		const education = data.education.map((item) => {
			const courses = item.courses.map((course) => {
				return <li key={course} className="typography--milli">{course}</li>;
			});

			return (
				<div key={item.institution} className="chamber--bottom">
					<h5>{item.institution}</h5>
					<span>{item.area}</span>
					<br />
					<span className="typography--milli">{startDate(item)} - {endDate(item)}</span>
					<ul>
						{courses}
					</ul>
				</div>
			);
		});

		return (
			<div id="resume" className="chamber-double--ends">
				<div className="container grid">
					<Link to="/" className="resume">Home</Link>
					<div className="header chamber--ends">
						<img src={data.basics.picture} alt={data.basics.name} className="avatar push--right hidden" />
						<div className="details">
							<div className="title chamber--bottom">
								<span className="typography--kilo">{data.basics.name}</span>
								<span className="typography--gamma muted">{data.basics.label}</span>
							</div>
							<div className="basic_details chamber-half--bottom text--center">
								<span className="grid__item one-third">
									<a href={data.basics.website} target="_blank" className="typography--eta">{website(data.basics.website)}</a>
								</span>
								<span className="grid__item one-third">
									<a href={`mailto:${data.basics.email}`} className="typography--eta">{data.basics.email}</a>
								</span>
								<span className="grid__item one-third">
									<a href={`tel:${data.basics.phone}`} className="typography--eta">{data.basics.phone}</a>
								</span>
							</div>
							<p className="chamber-double--sides chamber-half--bottom summary" dangerouslySetInnerHTML={{ __html: data.basics.summary }}></p>
							<hr />
						</div>
					</div>
					<div className="grid__item seven-twelfths">
						<Header5 title={'Experience'} />
						{work}
					</div>
					<div className="grid__item five-twelfths">
						<Header5 title={'Education'} />
						{education}
						<Header5 title={'Skills'} />
						<Skills data={data.skills} />
					</div>
					<Section title={'Find me here'} size={4}>
						<Profiles data={data.basics.profiles} isLink />
					</Section>
					<Section title={'Languages'} size={8}>
						<ul>
							{languages}
						</ul>
					</Section>
					<Section title={'References'}>
						{references}
					</Section>
					<Section title={'Interests'}>
						<Interests data={data.interests} />
					</Section>
				</div>
			</div>
		);
	}
}
