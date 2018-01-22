import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const References = (props) => {
	return (
		<Fragment>
			{
				props.data.map((ref, i) => {
					return (
						<blockquote key={i}>
							<p>{ref.reference}</p>
							<span className="typography--milli"><em>- {ref.name}</em></span>
						</blockquote>
					);
				})
			}
		</Fragment>
	);
};

References.protoTypes = {
	data: PropTypes.array.isRequired,
};

export default References;
