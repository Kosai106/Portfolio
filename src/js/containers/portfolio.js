import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Socials from "../components/molecules/socials";

import data from "../../json/resume.json";

const styles = {
  body: {
    backgroundColor: "white",
    minHeight: "100vh"
  },
  container: {
    padding: 16
  },
  navigation: {
		display: "flex",
    justifyContent: "space-between",
    position: "fixed",
		padding: 24,
		width: '100%',
    background: "black",
    logo: {
			position: 'absolute',
			top: 24,
			left: 24,
      height: 50
    },
    links: {
			position: 'absolute',
			top: 13 + (50 / 2),
			right: 24,
			link: {
				marginRight: 16
			}
		}
  },
  type: {
    display: "block",
    margin: 0,
    padding: 0
  },
  header: {
    backgroundImage: "linear-gradient(), url(../../img/background-min.jpg)",
    background:
      "linear-gradient(45deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%), no-repeat center/cover url(../../img/background-min.jpg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    height: 600,
    backgroundColor: "rgba(0,0,0,0.1)",
    wrapper: {
      textAlign: "left",
      width: 500,
      marginLeft: 256,
      title: {
        fontSize: 42,
        fontWeight: 700,
        marginBottom: 16,
        color: "white"
      },
      tagline: {
        color: "white"
      }
    }
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 20
  },
  footer: {
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: "center",
    footnote: {
      fontSize: 12
    }
  }
};

const Type = props => (
  <span {...props} style={{ ...styles.type, ...props.style }}>
    {props.children}
  </span>
)

const Container = props => (
	<div style={styles.container}>
		{props.children}
	</div>
)

const Navigation = props => (
  <Fragment>
    <img src={"../../img/logo.png"} style={styles.navigation.logo} />
    <div style={styles.navigation.links}>
      <Link to="/resume" style={styles.navigation.links.link}>Link</Link>
      <Link to="/resume" style={styles.navigation.links.link}>Link</Link>
      <Link to="/resume">Link</Link>
    </div>
  </Fragment>
);

const Header = props => (
  <div style={styles.header}>
    <div style={styles.header.wrapper}>
      <Type style={styles.header.wrapper.title}>Hello world</Type>
      <Type style={styles.header.wrapper.tagline}>I solve problems by desining and building beautiful digital experiences for both mobile and the web.</Type>
    </div>
  </div>
);

const Item = props => (
	<div>
		<img src={'../../img/background-min.jpg'} style={{ width: '100%', height: '100%' }} />
	</div>
)

const Gallery = props => (
  <div style={styles.gallery}>
    {
			[1,2,3,4,5,6].map(item => <Item key={item} />)
		}
  </div>
);

const Footer = props => (
	<footer style={styles.footer}>
		<span style={styles.footer.footnote}>Kevin Østerkilde &copy; 2018</span>
	</footer>
)

class Portfolio extends Component {
	state = {
		open: false
	};

  render() {
    return (
      <div style={styles.body}>
				<Navigation />
				<Header />
				<Container>
					<Gallery />
				</Container>
				<Footer />
			</div>
    );
  }
}

export default Portfolio;
