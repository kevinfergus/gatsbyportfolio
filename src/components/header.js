import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Paper } from '@material-ui/core';

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `rebeccapurple`,
			marginBottom: `1.45rem`
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`
			}}
		>
			<h1 style={{ margin: 0, textAlign: 'center' }}>
				<Link
					to="/"
					style={{
						color: `black`,
						textDecoration: `none`,
						margin: 10
					}}
				>
					About
				</Link>

				<Link
					to="/projects"
					style={{
						color: `black`,
						textDecoration: `none`,
						margin: 10
					}}
				>
					Projects
				</Link>
			</h1>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
