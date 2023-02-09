import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button } from "react-bootstrap"
import { useLocation } from "@reach/router"

function ReinNavbarExhibConflict() {
    
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation()
    const hideNavbarPaths = [
      "/exhibitions/conflicts/ConflictExhibitionOverview",
      "/exhibitions/conflicts/ConflictObjects/ConflictObjOne",
      "/exhibitions/conflicts/ConflictObjects/ConflictObjTwo",
      "/exhibitions/conflicts/ConflictObjects/ConflictObjThree",
    ]

    const hideNavbar = hideNavbarPaths.includes(location.pathname)

    return (
      <React.Fragment>
          {!hideNavbar && (
    <Navbar
        collapseOnSelect
        expand="true"
        fixed="top"
        className="navExhib navExh_blue"
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
            <a className="exhibition_menu_link nav_font" href="https://collection.reinherit-hub.eu/">Collections</a>
      </div>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" onClick={handleShow} style={{color:"white"}}/>

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
                  to="/about">
                    Who & Where is ReInHerit
                </Link>
                <a
                className="link-light text-decoration-none"
                  href="https://collection.reinherit-hub.eu/contribute">
                    Contribute
                </a>
              <br></br>
              <p>Traveling Exhibitions:</p>
              <a href="https://www.grazmuseum.at/en/exhibition/rethinking-conflicts-how-are-conflicts-reflected-in-objects/"className="link-light text-decoration-none">Graz Museum</a>  
              <a href="https://www.boccf.org/"className="link-light text-decoration-none">Bank of Cypus Cultural Foundation</a>  
              <a href="https://cycladic.gr/en"className="link-light text-decoration-none"> Museum of Cycladic Art</a>                     
            </Nav>
            </div>
      
        </Offcanvas>
       
          </Container>
        </Navbar>
          )}
      </React.Fragment>
    )
  }
  
  export default ReinNavbarExhibConflict;
