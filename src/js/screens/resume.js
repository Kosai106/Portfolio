import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../utilities/config/firebase';
import dataJSON from '../../json/resume.json';

// Atoms
import Header5 from '../components/atoms/headers/Header5';

// Molecules
import { Skills, Interests, Profiles, Languages, References, Education, Work } from '../components/molecules';

// Organisms
import Section from '../components/organisms/section';
import Header from '../components/organisms/header';

// Stylesheets
require('../../scss/app.scss');
require('../../scss/modules/resume.scss');

class Resume extends Component {
	state = {
		isReady: false,
		data: [],
	};

	componentWillMount() {
		if (process.env.NODE_ENV === 'production') {
			firebase.database().ref('/resume').once('value', (snapshot) => {
				const dbData = [];
				dbData.push(snapshot.val());
				this.setState({ data: dbData, isReady: true });
			});
		} else {
			const dbData = [];
			dbData.push(dataJSON);
			this.setState({ data: dbData, isReady: true });
		}
	}

	render() {
		const { data, isReady } = this.state;
		return (
			<Fragment>
				{
					isReady
						?
						(<div id="resume" className="chamber-double--ends">
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
						</div>)
						:
						(<Fragment>
							<Link to="/" className="resume">Home</Link>
							<div className="loading">
								<h1>Loading...</h1>
							</div>
						</Fragment>)
				}
			</Fragment>
		);
	}
}

export default Resume;
