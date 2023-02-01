import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button } from "react-bootstrap"

function ReinNavbarExhibConflict() {
    
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <React.Fragment>
    <Navbar
        collapseOnSelect
        expand="true"
        fixed="top"
        className="navExhibConflicts rounded-pill"
    > 
    <Container fluid>
        <Navbar.Brand href="#home" as="div" style={{color:"white"}}>
            ReInHerit --- Collection --- 
            <a style={{color: "white", textDecoration:'none'}} href="http://reinherit.d.trnc.wtf/"> Collections</a>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" onClick={handleShow} style={{color:"white"}}/>

        <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-dark">
          <Offcanvas.Header closeButton className="btn-light" />
          <Offcanvas.Body>
          <Nav className="flex-sm-column content-end">
                <Link
                className="link-light text-decoration-none"
                  to="/about"
                >What is ReInHerit 
                </Link>
                <Link
                className="link-light text-decoration-none"
                  to="/"
                  >
                  Digital Hub
                </Link>
              <p>Traveling Exhibitions</p>
              <a href="https://www.grazmuseum.at/"
                className="link-light text-decoration-none"
                >
                Graz Musuem
              </a>            
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
       
          </Container>
        </Navbar>
      </React.Fragment>
    )
  }
  
  export default ReinNavbarExhibConflict;
