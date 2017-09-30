import React, { PropTypes } from 'react';

const References = ({ data }) => {
	return (
		<div>
			{
				data.map((ref, i) => {
					return (
						<blockquote key={i}>
							<p>{ref.reference}</p>
							<span className="typography--milli"><em>- {ref.name}</em></span>
						</blockquote>
					);
				})
			}
		</div>
	);
};

References.prototype = {
	data: PropTypes.array.isRequired,
};

export default References;
