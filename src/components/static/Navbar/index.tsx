import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"


const ReinNavbar: React.FC = () => {

  return (
    <React.Fragment>
      <Navbar id="reinnav" sticky="top" collapseOnSelect expand="lg" className="bg-white p-3 ps-4">
        <Container fluid>
          {/* <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)} className="text-dark text-decoration-none"><img style={{maxWidth:"50px"}} src="/images/rein_logo.jpg"></img></Link></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-dark text-decoration-none nav-link" to="/">Digital Hub</Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/about">Project</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/team">Team</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/imprint">Imprint</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/dataprot">Data protection</Link>
              </NavDropdown>
              <Nav.Link as="div"><Link to="/news" className="text-dark text-decoration-none">News</Link></Nav.Link>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/resources">Overview</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/tools">Tools</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/webinars">Webinars</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/game">Game</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/portal/performances">Performances</Link>
              </NavDropdown>
              <NavDropdown title="Exhibitions" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/portal/exhibs">Overview</Link>
                <NavDropdown.Divider />
                <Link className="text-dark text-decoration-none dropdown-item" to="/exhibs/digital">Digital Exhibition</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/exhibs/travel">Traveling Exhibition</Link>
              </NavDropdown>
              
              <NavDropdown title="Performances" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/portal/performances">Overview</Link>
                <NavDropdown.Divider />
                <Link className="text-dark text-decoration-none dropdown-item" to="/performances/perf1">Performance 1</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/performances/perf2">Performance 2</Link>
              </NavDropdown>

              <Link className="text-dark text-decoration-none nav-link" to="/designs">E-shop</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
