import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

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

  const navLinks: {
    displayText: string
    link: string
    external?: boolean
  }[] = [
    { displayText: "Home", link: "/" },
    { displayText: "Content", link: "/discord" },
    { displayText: "News", link: "/services" },
    { displayText: "About", link: "/about" },
    { displayText: "Admin", link: "/admin/#", external: true },
  ]

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">ReInHerit</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">News</Nav.Link>
              <NavDropdown title="Content" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Training</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Apps
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Game(s)
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Exhibtions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Performance(s)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  E-shop(s)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
