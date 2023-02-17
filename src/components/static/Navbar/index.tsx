import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const ReinNavbar: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar
        id="reinnav"
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="bg-white p-sm-1 shadow-sm"
      >
        <Container fluid>
          <Navbar.Brand href="#home" as="div">
            <Link to="/" className="text-dark text-decoration-none">
              <img src="/images/Reinherit-Logo(31x30).webp" alt="Logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbsar-nav" />
          {/* <Link style={{color:"#424753"}} className="text-decoration-none nav-link" to="/">Home
              </Link> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="About" id="basic-nav-dropdown">
                <Link
                  style={{ color: "#424753" }}
                  className="text-decoration-none dropdown-item"
                  to="/about"
                >
                  Project
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/team"
                >
                  Consortium
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/imprint"
                >
                  Imprint
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/dataprot"
                >
                  Data protection
                </Link>
                
                {/*
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/doc"
                >
                  Documentation
            </Link> */}
              </NavDropdown>
              <Nav.Link as="div">
                <Link
                  style={{ color: "#424753" }}
                  to="/news"
                  className="text-decoration-none"
                >
                  News
                </Link>
              </Nav.Link>

              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/webinars"
                >
                  Webinars
                </Link>
                 {/*
                <Link
                   className="text-dark text-decoration-none dropdown-item"
                   to="/factsheets"
                 >
                   Research factsheets
                 </Link>
               <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/resources"
                >
                  Overview
                </Link>
                 <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/tools/apps"
                >
                  Applications documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/tools/components"
                >
                  Tool components
                </Link> */}
              {/*  <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/game"
                >
                  Videogame documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/performances"
                >
                  Performances documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/bestpractices"
                >
                  Best practices
                </Link> */}
          </NavDropdown>
          
          <NavDropdown title="Discover" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibitions"
                >
                  Exhibitions
                </Link>
                <a href="https://collection.reinherit-hub.eu/"
                  className="text-dark text-decoration-none dropdown-item"
                >
                  Digital Collection
                </a>
                <Link
                 style={{ color: "#424753" }}
                 className="text-dark text-decoration-none dropdown-item"
                 to="/eshop"
               >
                 eShop
               </Link>
               <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/podcasts"
                >
                  Museum Up podcast
                </Link>
          </NavDropdown>
        
          <NavDropdown title="Participate" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/networkinghub"
                >
                  Forum
                </Link>
                <Link
                style={{ color: "#424753" }}
                className="text-dark text-decoration-none dropdown-item"
                to="/museumcalls/travelling"
              >
                Host an exhibition
              </Link>
              <Link
                style={{ color: "#424753" }}
                className="text-dark text-decoration-none dropdown-item"
                to="/museumcalls/digital"
              >
                Contribute to the collection
              </Link>
          </NavDropdown>


              {/* <Link className="text-dark text-decoration-none nav-link" to="/">Events</Link> */}
              {/*<NavDropdown title="Events" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/events"
                >
                  Overview
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/performances"
                >
                  Performances
                </Link>
              </NavDropdown>
             */}             
            
            </Nav>

            
            <Nav>
            {/* 
            <NavDropdown title="Portal" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/resources"
                >
                  Resources
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/networkinghub"
                >
                  Networking Hub
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/visitorhub"
                >
                  Discover
                </Link>
              </NavDropdown> */}
              <Nav.Link
                className="justify-content-end"
                as="div"
                style={{ color: "#424753" }}
              >
                <Link
                  to="/search"
                  className="text-dark text-decoration-none"
                  aria-label="Fulltext search for the digital-hub"
                >
                  Search
                </Link>
              </Nav.Link> 
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default ReinNavbar
