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
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-button"
                type="button"
                data-toggle="collapse"
                data-target={`#${navbarId}`}
                aria-controls={navbarId}
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-button-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-flex justify-content-center"
                id={navbarId}
              >
                <ul className="navbar-nav ml-md-auto">
                  {navbar
                    .filter((l) => l.side === 'left')
                    .map((l) => (
                      <li key={l.path} className="nav-item">
                        <Link className="nav-link" to={l.path}>
                          {l.name}
                        </Link>
                      </li>
                    ))}
                </ul>
                <a className="navbar-brand" id="logo">
                  <Logo />
                </a>
                <ul className="navbar-nav mr-md-auto">
                  {navbar
                    .filter((l) => l.side === 'right')
                    .map((l) => (
                      <li key={l.path} className="nav-item">
                        <Link className="nav-link" to={l.path}>
                          {l.name}
                        </Link>
                      </li>
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
