import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
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
        fixed="top"
        className="bg-white p-sm-1 shadow-sm"
      >
        <Container fluid>
          <Navbar.Brand href="#home" as="div">
            <Link to="/" className="text-dark text-decoration-none">
              <img
                style={{ maxWidth: "30px", fontSize:".5em" }}
                src="/images/logo_textless.jpg"
                alt="Logo"
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Link style={{color:"#424753"}} className="text-decoration-none nav-link" to="/">Home
              </Link> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <Link
                  style={{ color: "#424753" }}
                  className="text-decoration-none dropdown-item"
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
                <Link
                  style={{ color: "#424753" }}
                  to="/news"
                  className="text-decoration-none"
                >
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
              <Nav.Link as="div">
                <Link
                  className="text-dark text-decoration-none"
                  to="/exhibitions"
                >
                  Exhibitions
                </Link>
              </Nav.Link>
              <Link
                style={{ color: "#424753" }}
                className="text-decoration-none nav-link"
                to="/eshop"
              >
                eShop
              </Link>
            </Nav>
            <Nav>
              <Nav.Link className="justify-content-end" as="div">
                <Link to="/search" className="text-dark text-decoration-none" aria-label="Fulltext search for the digital-hub">
                  Search
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
