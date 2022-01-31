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
      <Navbar id="reinnav" sticky="top" collapseOnSelect style={{borderLeft: `10px solid ${theme.styles.MAIN_COLOR}`}} expand="lg" className="bg-light shadow-sm">
        <Container fluid>
          <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)} className="text-dark text-decoration-none"><img style={{maxWidth:"50px"}} src="/images/rein_logo.jpg"></img></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="div"><Link className="text-dark text-decoration-none" to={addMode("/", theme.mode)}>Home</Link></Nav.Link>
              <Nav.Link as="div"><Link to={addMode("/news", theme.mode)} className="text-dark text-decoration-none">News</Link></Nav.Link>
              <NavDropdown title="Exhibitions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><Link to="/exhibs/digital" className="text-dark text-decoration-none">Digital Exhibition</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1"><Link to="/exhibs/travel" className="text-dark text-decoration-none">Traveling Exhibition</Link></NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as="div"><Link to="/tools" className="text-dark text-decoration-none">Toolkit</Link></Nav.Link>
              
              {/* <NavDropdown title="Toolkit" id="nav_toolkit">
                <NavDropdown.Item as="div" href="#action/3.2">
                  Apps
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.3">
                  Game(s)
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.3">
                <Link to={addMode("/content/training", theme.mode)} className="text-dark text-decoration-none">Training / Webinars</Link>
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as="div"><Link to="#" className="text-dark text-decoration-none">Performance(s)</Link></Nav.Link>
              <Nav.Link as="div"><Link to="/dataprot" className="text-dark text-decoration-none">E-Shop</Link></Nav.Link>
            </Nav>
            <Nav>
            <Form.Select className="border-0" aria-label="Default select example" onChange={(evt) => theme.changeTheme(evt.currentTarget.value as any)}>
              {Object.entries(reinheritStatics).map(([key, propVal]) => <option key={`restmode_select_${propVal.REST_MODE_VAL}`} selected={theme.mode === propVal.REST_MODE_VAL} value={propVal.REST_MODE_VAL}>{propVal.LABEL}</option>)}
            </Form.Select>
              <Nav.Link as="div"><Link to={addMode("/portal", theme.mode)} className="text-dark text-decoration-none">Portal</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
