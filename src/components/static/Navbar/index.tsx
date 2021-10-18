import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap"
import { useTheme } from "../../../hooks/contexts/useTheme"



const ReinNavbar: React.FC = () => {
  // show navbar not on landing -> on landing only ask for the use-case
  // or ask on content page who you are / the other one is

  // --- Content /  ---

  // Trainingsmaterial: Webinare + Text

  // Apps: Text + Link

  // Game: Text + Link

  // Exhibitions: ?? unclear

  // Performance:
  // embedded live stream et.c

  // news entries

  // eshop-page

  // ----

  // internal project management -> drive / discord / stuff

  // url examples:
  // https://reinherit.bla.eu/content/apps/1?mode=researcher
  // https://reinherit.bla.eu/content/trainings/1?mode=researcher

  // https://reinherit.bla.eu/
  // https://reinherit.bla.eu/portal
  // https://reinherit.bla.eu/portal/researcher -> https://reinherit.bla.eu/content/apps/1?mode=researcher
  // https://reinherit.bla.eu/portal/policyMaker -> https://reinherit.bla.eu/content/apps/1?mode=policyMaker
  // https://reinherit.bla.eu/portal/visitor -> https://reinherit.bla.eu/content/apps/1?mode=visitor

  // https://reinherit.bla.eu/portal?mode=researcher -> https://reinherit.bla.eu/content/apps/1?mode=researcher


  const { theme } = useTheme();

  const addMode = (url: string, mode: string) => `${url}?mode=${mode}`;

  return (
    <React.Fragment>
      <Navbar collapseOnSelect className={`border-${theme.styles.BS_COLOR_CLASS} border-bottom border-3`} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" as="div"><Link to={addMode("/", theme.mode)}>ReInHerit</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="div" href="#features"><Link className="text-secondary text-decoration-none" to={addMode("/", theme.mode)}>Home</Link></Nav.Link>
              <Nav.Link as="div" href="#pricing"><Link to={addMode("/content/news", theme.mode)} className="text-secondary text-decoration-none">News</Link></Nav.Link>
              <NavDropdown title="Content" id="collasible-nav-dropdown">
                <NavDropdown.Item as="div" href="#action/3.1"><Link to={addMode("/content/training", theme.mode)} className="text-secondary text-decoration-none">Training</Link></NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.2">
                  Apps
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.3">
                  Game(s)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="div" href="#action/3.4">
                  Exhibtions
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.4">
                  Performance(s)
                </NavDropdown.Item>
                <NavDropdown.Item as="div" href="#action/3.4">
                  E-shop(s)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <Form.Select aria-label="Default select example" onChange={(evt) => theme.changeTheme(evt.currentTarget.value as any)}>
              <option selected={theme.mode === "visitor"} value="visitor">Visitor</option>
              <option selected={theme.mode === "researcher"} value="researcher">Researcher</option>
            </Form.Select>
              <Nav.Link as="div"><Link to={addMode("/about", theme.mode)} className="text-secondary text-decoration-none">About</Link></Nav.Link>
              <Nav.Link as="div" eventKey={2}>
                <a target="blank" href="/admin" className="text-secondary text-decoration-none">Admin</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
