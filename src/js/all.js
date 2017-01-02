import React from 'react';

// const data = require('json!./../json/data.json'); // False linting error.

// Fix this fucking shit
// const Stuff = () => data.social.map((item) => {
//  return (
//    <li key={item.id}>
//      <a href={item.url}>
//        <i className={`fa ${item.icon}`}></i>
//      </a>
//    </li>
//  );
// });

// console.log(Stuff);
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
								<ul>
									<li>
										<a href="https://twitter.com/Kosai106" target="_blank" className="animated icon">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://linkedin.com/in/kosai106" target="_blank" className="animated icon">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="https://dribbble.com/Kosai106" target="_blank" className="animated icon">
											<i className="fa fa-dribbble"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/kosai106/" target="_blank" className="animated icon">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li>
										<a href="http://codepen.io/Kosai106/" target="_blank" className="animated icon">
											<i className="fa fa-codepen"></i>
										</a>
									</li>
									<li>
										<a href="https://github.com/Kosai106" target="_blank" className="animated icon">
											<i className="fa fa-github"></i>
										</a>
									</li>
									<li>
										<a href="https://www.artstation.com/artist/kosai106" target="_blank" className="animated icon">
											<svg width="16" height="16" viewBox="0 0 1024 893">
												<polygon points="308.6,144.9 89.4,528 526.2,528 " />
												<path d="M0,690l89.4,155.2l2.3,3.7c15.9,24.9,42.5,41.1,72,43.6l6.2,0.6h563.4L615.6,690H0z" />
												<path d="M1019.7,657.5l-0.1-0.4c-1-3.7-2.5-7.2-4.4-10.6L674,43.7c-1.2-2.2-2.7-4.2-4.3-6.2l-0.4-0.5c-18-21.1-43.7-34.2-71.3-36.4l-6.2-0.5H417.4L924.2,893l93-166.8c0.6-1.1,1.1-2.2,1.5-3.4v0C1025.3,701.6,1025.7,678.9,1019.7,657.5z" />
											</svg>
										</a>
									</li>
								</ul>
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
							<button type="submit" value="Send" className={`${toggleForm}`}>Send message</button>
							<button onClick={(e) => { this.toggleForm(e); }} id="form_enable" className={`${openClass} button`}>{ButtonMessage}</button>
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
