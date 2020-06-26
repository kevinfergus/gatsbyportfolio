import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Breadcrumbs, Button, BottomNavigation } from '@material-ui/core';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Button>Test</Button>
		<h1>Hi I'm Kevin</h1>
		<p>I'm a fullstack web developer based in Chicago.</p>
		<p>
			I like to create great user experiences and solve interesting problems. I'm open to all technologies but my
			tools of choise are Javascript, React, and Node.
		</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
	</Layout>
);

export default IndexPage;
