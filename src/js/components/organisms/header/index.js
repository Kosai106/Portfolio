import React, { PropTypes } from 'react';

function website(x) {
	return (
		x.replace(/^https?:\/\//, 'www.').replace(/\/$/, '')
	);
}

const Header = ({ data, children }) => {
	return (
		<div className="header chamber--ends">
			<img src={data.picture} alt={data.name} className="avatar push--right hidden" />
			<div className="details">
				<div className="title chamber--bottom">
					<span className="typography--kilo">{data.name}</span>
					<span className="typography--gamma muted">{data.label}</span>
				</div>
				<div className="basic_details chamber-half--bottom text--center">
					<span className="grid__item one-third">
						<a href={data.website} target="_blank" className="typography--eta">{website(data.website)}</a>
					</span>
					<span className="grid__item one-third">
						<a href={`mailto:${data.email}`} className="typography--eta">{data.email}</a>
					</span>
					<span className="grid__item one-third">
						<a href={`tel:${data.phone}`} className="typography--eta">{data.phone}</a>
					</span>
				</div>
				<p className="chamber-double--sides chamber-half--bottom summary" dangerouslySetInnerHTML={{ __html: data.summary }}></p>
				<hr />
			</div>
		</div>
	);
};

Header.prototype = {
	data: PropTypes.array.isRequired,
	children: PropTypes.children,
};

export default Header;
