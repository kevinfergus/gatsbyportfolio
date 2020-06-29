import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import headshot from '../images/headshot.png';
import { Grid, Avatar } from '@material-ui/core';
import './styles.css';
const IndexPage = () => (
	<Layout>
		<Grid container direction="row" justify="left" alignItems="left">
			<SEO title="Home" />
			<div style={{ display: 'flex' }}>
				<div style={{ justifyContent: 'left', textAlign: 'left', width: 400 }}>
					<div style={{ width: 400, height: 500 }}>
						<Avatar style={{ height: 400, width: 400 }} alt="Kevin" src={headshot} />
					</div>
					<p>Hi, I'm Kevin Fergus</p>
					<p>I'm a full stack web developer based in Chicago.</p>
					<p>
						I like to create great user experiences and solve interesting problems. I'm open to all
						technologies but my tools of choice are Javascript, React, and Node. Let's make something cool.
					</p>
				</div>
			</div>
			<div />
			<div />
			<div style={{ position: 'absolute', fontSize: 50, right: 600, top: 200 }}>
				{/* <List>
					<ListItemText>Javascript</ListItemText>
					<ListItemText>React</ListItemText>
					<ListItemText>Redux</ListItemText>
					<ListItemText>PostgreSQL</ListItemText>
					<ListItemText>HTML5</ListItemText>
					<ListItemText>CSS3</ListItemText>
				</List> */}
				<ul id="skills">
					<li style={{ padding: 20 }}>HTML5</li>
					<li style={{ padding: 20 }}>CSS3</li>
					<li style={{ padding: 20 }}>Javascript</li>
					<li style={{ padding: 20 }}>React</li>
					<li style={{ padding: 20 }}>Redux</li>
					<li style={{ padding: 20 }}>PostgreSQL</li>
				</ul>
			</div>
		</Grid>
	</Layout>
);

export default IndexPage;
