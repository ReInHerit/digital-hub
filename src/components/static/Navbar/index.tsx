import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const ReinNavbar: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar
        id="reinnav"
        collapseOnSelect
        expand="lg"
        className="bg-white p-sm-3 ps-sm-4"
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)} className="text-dark text-decoration-none"><img style={{maxWidth:"50px"}} src="/images/rein_logo.jpg"></img></Link></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-dark text-decoration-none nav-link" to="/">
                Home
              </Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about"
                >
                  Project
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/team"
                >
                  Team
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/imprint"
                >
                  Imprint
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/dataprot"
                >
                  Data protection
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/doc"
                >
                  Documentation
                </Link>
              </NavDropdown>
              <Nav.Link as="div">
                <Link to="/news" className="text-dark text-decoration-none">
                  News
                </Link>
              </Nav.Link>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/resources"
                >
                  Overview
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/tools/apps"
                >
                  Tool apps
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/tools/components"
                >
                  Tool components
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/webinars"
                >
                  Webinars
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/game"
                >
                  Game
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/performances"
                >
                  Performances
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/bestpractices"
                >
                  Best practices
                </Link>
              </NavDropdown>
              {/* <Link className="text-dark text-decoration-none nav-link" to="/">Events</Link> */}
              <NavDropdown title="Events" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/events"
                >
                  Overview
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/performances"
                >
                  Performances
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibs/travel"
                >
                  Travelling exhibitions
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/hackathon"
                >
                  Hackathon
                </Link>
              </NavDropdown>
              <NavDropdown title="Exhibitions" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibitions"
                >
                  Overview
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibs/digital1"
                >
                  Digital Exhibition 1
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibs/digital2"
                >
                  Digital Exhibition 2
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibs/digital3"
                >
                  Digital Exhibition 3
                </Link>
              </NavDropdown>
              <Link
                className="text-dark text-decoration-none nav-link"
                to="/eshop"
              >
                eShop
              </Link>
            </Nav>
            <Nav>
              <Nav.Link className="justify-content-end" as="div">
                <Link to="/search" className="text-dark text-decoration-none">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
