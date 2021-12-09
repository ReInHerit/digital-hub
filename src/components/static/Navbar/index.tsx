import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap"
import { reinheritStatics } from "../../../data/reinheritStatics"
import { useReinSoftAuth } from "../../../hooks/contexts/useReinSoftAuth"
import { useReinTheme } from "../../../hooks/contexts/useReinTheme"



const ReinNavbar: React.FC = () => {

  const { theme } = useReinTheme();
  const auth = useReinSoftAuth()

  const addMode = (url: string, mode: string) => `${url}?mode=${mode}`;

  /**
   * Handles login logout on specific navlink click.
   */
  const handleAuth = () => {
    if(auth.signedIn){
      auth.logout()
    } else {
      auth.login("admin")
    }
  }

  return (
    <React.Fragment>
      <Navbar collapseOnSelect style={{borderLeft: `10px solid ${theme.styles.MAIN_COLOR}`}} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)} className="text-dark text-decoration-none"><img style={{maxWidth:"50px"}} src="/images/rein_logo.jpg"></img></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="div"><Link className="text-dark text-decoration-none" to={addMode("/", theme.mode)}>Home</Link></Nav.Link>
              <Nav.Link as="div"><Link to={addMode("/content/news", theme.mode)} className="text-dark text-decoration-none">News</Link></Nav.Link>
              <Nav.Link as="div"><Link to="#" className="text-dark text-decoration-none">Digital Exhibitions</Link></Nav.Link>
              
              <NavDropdown title="Toolkit" id="nav_toolkit">
                <NavDropdown.Item as="div" href="#action/3.2">
                  Apps
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.3">
                  Game(s)
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.3">
                <Link to={addMode("/content/training", theme.mode)} className="text-dark text-decoration-none">Training / Webinars</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as="div"><Link to="#" className="text-dark text-decoration-none">Performance(s)</Link></Nav.Link>
              <Nav.Link as="div"><Link to="/dataprot" className="text-dark text-decoration-none">E-Shop</Link></Nav.Link>
            </Nav>
            <Nav>
            <Form.Select className="border-0" aria-label="Default select example" onChange={(evt) => theme.changeTheme(evt.currentTarget.value as any)}>
              {Object.entries(reinheritStatics).map(([key, propVal]) => <option key={`restmode_select_${propVal.REST_MODE_VAL}`} selected={theme.mode === propVal.REST_MODE_VAL} value={propVal.REST_MODE_VAL}>{propVal.LABEL}</option>)}
            </Form.Select>
              <Nav.Link as="div"><Link to={addMode("/doc", theme.mode)} className="text-dark text-decoration-none">Documentation</Link></Nav.Link>
              <Nav.Link as="div" eventKey={2}>
                <Link to={addMode("/intern", theme.mode)} className="text-dark text-decoration-none">Admin</Link>
              </Nav.Link>
              <Nav.Link as="div" eventKey={3} onClick={handleAuth}><a href="#">{ auth.signedIn ? "Logout" : "Login"}</a></Nav.Link>
            </Nav>
            <Nav>
            <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)} className="text-dark text-decoration-none"><img style={{maxWidth:"60px"}} src="/images/rein_eu.png"></img></Link></Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
