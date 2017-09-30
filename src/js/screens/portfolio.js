import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
//import Socials from '../../js/socials';
import Socials from '../components/molecules/socials';

import data from '../../json/resume.json';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	toggleForm(e) {
		this.setState({
			open: !this.state.open,
		});
		e.preventDefault();
	}
	render() {
		const openClass = this.state.open ? 'form_opened' : 'form_closed';
		const toggleForm = this.state.open ? 'visible' : 'ghost';
		const toggleFormInverted = this.state.open ? 'ghost' : 'visible';
		const ButtonMessage = this.state.open ? 'Cancel' : 'Contact me';

		return (
			<section id="main">
				<Link to="/resume" className="resume">Resume</Link>
				<div className="container">
					<div className="hero">
						<h1 className="headline animated fadeIn">Kevin &Oslash;sterkilde</h1>
						<p className="subline">Designer &amp; Developer</p>

						<hr className="seperator" />
						<div className={toggleFormInverted}>
							<p>{this.props.desc}, <a href={this.props.link} target="_blank">{this.props.title}</a></p>
							<hr className="seperator" />

							<div className="social">
								<h3>Find my work here</h3>
								<Socials data={this.props.data.basics.profiles} />
							</div>
						</div>
					</div>

					<form action="https://formspree.io/kevin@oesterkilde.dk" method="POST">
						<div className={`grid ${toggleForm}`}>
							<input type="hidden" name="_next" value="#" />
							<input type="hidden" name="_subject" value="Website Contact Form" />
							<input type="text" name="_gotcha" style={{ display: 'none' }} />
							<div className="inline">
								<div className="field">
									<label htmlFor="name">Name</label>
									<input type="text" name="name" id="name" required />
								</div>
								<div className="field">
									<label htmlFor="email">Email</label>
									<input type="email" name="email" id="email" required />
								</div>
							</div>
							<div className="bigBox">
								<label htmlFor="message">Message</label>
								<textarea name="message" id="message" rows="4" required />
								<button type="submit" value="Send" className={toggleFormInverted}>Send message</button>
							</div>
						</div>
						<div className="row">
							<button onClick={(e) => { this.toggleForm(e); }} id="form_enable" className={`${openClass} button`}>{ButtonMessage}</button>
							<button type="submit" value="Send" className={toggleForm}>Send message</button>
						</div>
					</form>
				</div>
				<div id="success"></div>
			</section>
		);
	}
}

Portfolio.defaultProps = {
	link: data.work[0].website,
	title: data.work[0].company,
	desc: 'Currently working at the Danish startup',
	data,
};

Portfolio.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
};
