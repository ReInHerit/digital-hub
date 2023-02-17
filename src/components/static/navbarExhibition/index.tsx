import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button } from "react-bootstrap"

function ReinNavbarExhib() {
    
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <React.Fragment>
    <Navbar
        collapseOnSelect
        expand="true"
        fixed="top"
        className="navExhib navExh_yellow"
    >
      <div className="header-burger">
<div className="hamburger"></div>
<div className="hamburger"></div>
<div className="hamburger"></div>
</div>
    <Container fluid className="exh_navBar_container rounded-pill">
        <Navbar.Brand href="#home" as="div" className="exhibition_navbar">
           <div className="exhibition_navbar_inner">
            <a className="exhibition_menu_link" href="https://reinherit-hub.eu/">ReInHerit</a>
            <div className="exh_line"></div>
            <a className="exhibition_menu_link nav_font" href="https://reinherit-hub.eu/exhibitions">Exhibition</a>      
            <a className="exhibition_menu_link nav_font" href="https://collection.reinherit-hub.eu/">Collection</a>
      
        <Navbar.Toggle className="navbar-toggler" onClick={handleShow} />

        <Offcanvas show={show} onHide={handleClose} placement="end" className="exhibition_burger_container">
          <Offcanvas.Header closeButton className="exhibition_burger" />
          <div className="exhibition_burger_inner">
          <Nav className="flex-sm-column content-end">
                <Link
                className="link-light text-decoration-none"
                  to="/about">
                    What is ReInHerit 
                </Link>
                <Link
                className="link-light text-decoration-none"
                  to="/about/team">
                    Who & Where is ReInHerit
                </Link>
                <Link
                className="link-light text-decoration-none"
                to="/museumcalls/travelling">
                Host an Exhibition
                </Link>
                <Link
                className="link-light text-decoration-none"
                to="/museumcalls/digital">
                Object Contribution
                </Link>
              <div className="exh_space"></div>
              <p>Travelling Exhibition:</p>
              <a href="https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/"className="link-light text-decoration-none">Graz Museum</a>  
              <a href="https://www.boccf.org/"className="link-light text-decoration-none">Bank of Cypus Cultural Foundation</a>  
              <a href="https://cycladic.gr/en"className="link-light text-decoration-none"> Museum of Cycladic Art</a>            
            </Nav>
          </div>
        </Offcanvas>
        </div>
        </Navbar.Brand>
          </Container>
        </Navbar>
      </React.Fragment>
    )
  }
  
  export default ReinNavbarExhib;
