import React from 'react';

import Socials from '../js/socials';
import data from '../json/data.json';

const Console = console;
const message = "Hi there stranger, \n \n Thanks for looking at my site. \n I'm available for hire to do both web-stuff and 3D art! \n Contact me via the form or directly at kevin@oesterkilde.dk \n \n Cheers, \n Kevin Østerkilde.";
Console.log(message);

export default class All extends React.Component {
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
								<Socials content={data} />
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
							<label htmlFor="message">Message</label>
							<div className="bigBox">
								<textarea name="message" id="message" rows="4" required />
								<button type="submit" value="Send" className={toggleFormInverted}>Send message</button>
							</div>
						</div>
						<div className="row">
							<button onClick={(e) => { this.toggleForm(e); }} id="form_enable" className={`${openClass} button`}>{ButtonMessage}</button>
							<button type="submit" value="Send" className={`${toggleForm}`}>Send message</button>
						</div>
					</form>
				</div>
				<div id="success"></div>
			</section>
		);
	}
}

All.propTypes = {
	link: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	desc: React.PropTypes.string.isRequired,
};
