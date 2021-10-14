import { Link } from "gatsby"
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
          <Navbar.Brand href="#home" as="div"><Link to="/">ReInHerit</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as="div" href="#features"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link as="div" href="#pricing"><Link to="/content/news">News</Link></Nav.Link>
              <NavDropdown title="Content" id="collasible-nav-dropdown">
                <NavDropdown.Item as="div" href="#action/3.1"><Link to="/content/training">Training</Link></NavDropdown.Item>
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
              <Nav.Link as="div" href="#deets"><Link to="/about">About</Link></Nav.Link>
              <Nav.Link as="div" eventKey={2} href="#memes">
                <a target="blank" href="/admin">Admin</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
