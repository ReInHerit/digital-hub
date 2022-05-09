import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap"
import { reinheritStatics } from "../../../data/reinheritStatics"
import { useReinTheme } from "../../../hooks/contexts/useReinTheme"



const ReinNavbar: React.FC = () => {

  const { theme } = useReinTheme();

  const addMode = (url: string, mode: string) => `${url}?mode=${mode}`;

  return (
    <React.Fragment>
      <Navbar id="reinnav" sticky="top" collapseOnSelect style={{borderLeft: `10px solid ${theme.styles.MAIN_COLOR}`}} expand="lg" className="bg-white shadow-sm">
        <Container fluid>
          <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)} className="text-dark text-decoration-none"><img style={{maxWidth:"50px"}} src="/images/rein_logo.jpg"></img></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="text-dark text-decoration-none nav-link" to={addMode("/", theme.mode)}>Digital Hub</Link>
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/about">About</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/team">Team</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/imprint">Imprint</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/dataprot">Data protection</Link>
              </NavDropdown>
              <Nav.Link as="div"><Link to="/news" className="text-dark text-decoration-none">News</Link></Nav.Link>
              <NavDropdown title="Exhibitions" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/portal/exhibs">Overview</Link>
                <NavDropdown.Divider />
                <Link className="text-dark text-decoration-none dropdown-item" to="/exhibs/digital">Digital Exhibition</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/exhibs/travel">Traveling Exhibition</Link>
              </NavDropdown>

              <Link className="text-dark text-decoration-none nav-link" to={addMode("/tools", theme.mode)}>Toolkit</Link>
              
              <NavDropdown title="Performances" id="basic-nav-dropdown">
                <Link className="text-dark text-decoration-none dropdown-item" to="/portal/performances">Overview</Link>
                <NavDropdown.Divider />
                <Link className="text-dark text-decoration-none dropdown-item" to="/performances/perf1">Performance 1</Link>
                <Link className="text-dark text-decoration-none dropdown-item" to="/performances/perf2">Performance 2</Link>
              </NavDropdown>

              <Link className="text-dark text-decoration-none nav-link" to={addMode("/designs", theme.mode)}>E-shop</Link>
            </Nav>
            <Nav>
            <Form.Select className="border-0" aria-label="Default select example" onChange={(evt) => theme.changeTheme(evt.currentTarget.value as any)}>
              {Object.entries(reinheritStatics).map(([key, propVal]) => <option key={`restmode_select_${propVal.REST_MODE_VAL}`} selected={theme.mode === propVal.REST_MODE_VAL} value={propVal.REST_MODE_VAL}>{propVal.LABEL}</option>)}
            </Form.Select>
              <Link className="text-dark text-decoration-none nav-link" to={addMode("/portal", theme.mode)}>Portal</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
