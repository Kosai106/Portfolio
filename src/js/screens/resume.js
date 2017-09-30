import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import firebase from '../utilities/config/firebase';

// Atoms
import Header5 from '../components/atoms/headers/Header5';

// Molecules
import Skills from '../components/molecules/skills';
import Interests from '../components/molecules/interests';
import Profiles from '../components/molecules/profiles';
import Languages from '../components/molecules/languages';
import References from '../components/molecules/references';
import Education from '../components/molecules/education';
import Work from '../components/molecules/work';

// Organisms
import Section from '../components/organisms/section';
import Header from '../components/organisms/header';

require('../../scss/app.scss');
require('../../scss/modules/resume.scss');

// import data from '../../json/resume.json';

export default class Resume extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
			data: [],
		};
	}

	componentWillMount() {
		firebase.database().ref('/resume').once('value', (snapshot) => {
			const dbData = [];
			dbData.push(snapshot.val());
			this.setState({ data: dbData, isReady: true });
		});
	}

	render() {
		const { data, isReady } = this.state;
		return (
			<div>
				{
					isReady ? (
						<div id="resume" className="chamber-double--ends">
							<div className="container grid">
								<Link to="/" className="resume">Home</Link>
								<Header data={data[0].basics} />
								<div className="grid__item seven-twelfths">
									<Header5 title={'Experience'} />
									<Work data={data[0].work} />
								</div>
								<div className="grid__item five-twelfths">
									<Header5 title={'Education'} />
									<Education data={data[0].education} />
									<Header5 title={'Skills'} />
									<Skills data={data[0].skills} />
								</div>
								<Section title={'Find me here'} size={4}>
									<Profiles data={data[0].basics.profiles} isLink />
								</Section>
								<Section title={'Languages'} size={8}>
									<ul>
										<Languages data={data[0].languages} />
									</ul>
								</Section>
								<Section title={'References'}>
									<References data={data[0].references} />
								</Section>
								<Section title={'Interests'}>
									<Interests data={data[0].interests} />
								</Section>
							</div>
						</div>
					) : (
							<div className="loading">
								<h1>Loading...</h1>
							</div>
						)
				}
			</div>
		);
	}
}
