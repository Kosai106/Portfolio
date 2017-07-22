import React from 'react';

export default class Socials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const socialElements = this.props.content.map((item) => {
			const name = item.network.toLowerCase();
			return (
				<li key={item.network}>
					<a className="animated icon" target="_blank" href={item.url}>
						<svg role="img" className="fa" viewBox="0 0 100 100">
							<use xlinkHref={`img/socials/${name}-logo.svg#${item.network}`}></use>
						</svg>
					</a>
				</li>
			);
		});

		return (
			<ul>
				{socialElements}
			</ul>
		);
	}
}

Socials.propTypes = {
	content: React.PropTypes.array.isRequired,
};
