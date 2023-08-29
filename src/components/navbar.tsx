import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Logo from '../images/unifavela.secondary.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {};
type NavbarState = {};

export default class WebsiteNavbar extends React.Component<NavbarProps, NavbarState> {
  state: NavbarState = {};
  render() {
    const navbarId = 'navbar';
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                navbar {
                  name
                  path
                  side
                }
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: { navbar },
          },
        }) => (
          <React.Fragment>
            <Navbar expand="lg">
              <Container>
                <Navbar.Toggle aria-controls={navbarId}>
                  <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id={navbarId}>
                  <Nav className="ml-lg-auto">
                    {navbar
                      .filter((l) => l.side === 'left')
                      .map((l) => (
                        <Nav.Link as={Link} key={l.path} to={l.path}>{l.name}</Nav.Link>
                    ))}
                  </Nav>
                  <Navbar.Brand id="logo"><Logo /></Navbar.Brand>
                  <Nav className="mr-lg-auto">
                    {navbar
                      .filter((l) => l.side === 'right')
                      .map((l) => (
                        <Nav.Link as={Link} key={l.path} to={l.path}>{l.name}</Nav.Link>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </React.Fragment>
        )}
      />
    );
  }
}
