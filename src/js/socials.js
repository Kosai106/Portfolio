import React from 'react';

export default class Socials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const socialElements = this.props.content.map((item) => {
			const icon = !!item.icon.length ? <i className={`fa ${item.icon}`}></i> : <div className="icon centered" dangerouslySetInnerHTML={{ __html: item.svg }}></div>;
			return (
				<li key={item.id}>
					<a className="animated icon" target="_blank" href={item.url}>
						{icon}
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
