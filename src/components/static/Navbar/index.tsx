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
                  to="/doc"
                >
                  About the Digital Hub
            </Link>
            <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/doc/faq"
                >
                  FAQ
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
                 
                <Link
                   className="text-dark text-decoration-none dropdown-item"
                   to="/factsheets"
                 >
                   Research factsheets
                 </Link>
                 <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/bestpractices"
                >
                  Best practices
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/handbook"
                >
                  Handbook
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/hackathonnicosia"
                >
                  Hackathon Training Material
                </Link>
                 <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/tools/apps"
                >
                  Toolkit Apps documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/tools/components"
                >
                  Toolkit components
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/gamedoc/5761ffde-e42d-4697-973a-353c16f32590"
                >
                  Videogame Documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/eshopdoc"
                >
                  eShop documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibdoc/"
                >
                  Exhibitions documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibdoc/doconlinecoll/"
                >
                  Online collection documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/firstperfdoc/overview/"
                >
                  First performance documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/secondperfdoc/spoverview"
                >
                  Second performance documentation
                </Link>
                {/*
               <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/resources"
                >
                  Overview
                </Link>
                 */}  
          </NavDropdown>
          
          <NavDropdown title="Discover" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/exhibitions"
                >
                  Digital Exhibitions
                </Link>
                <a href="https://collection.reinherit-hub.eu/"
                  className="text-dark text-decoration-none dropdown-item"
                >
                  Digital Collection
                </a>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/travellingexhibitions"
                >
                  Travelling Exhibitions
                </Link>
                <Link
                 style={{ color: "#424753" }}
                 className="text-dark text-decoration-none dropdown-item"
                 to="/eshop"
               >
                 eShop
               </Link>
               <Link
                 style={{ color: "#424753" }}
                 className="text-dark text-decoration-none dropdown-item"
                 to="/game"
               >
                 Videogame
               </Link>
               <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/podcasts"
                >
                  Museum Up podcast
                </Link>
                <Link
                 style={{ color: "#424753" }}
                 className="text-dark text-decoration-none dropdown-item"
                 to="/applications"
               >
                 Toolkit Apps
               </Link>
               <Link
                 style={{ color: "#424753" }}
                 className="text-dark text-decoration-none dropdown-item"
                 to="/events"
               >
                 Events
               </Link>
          </NavDropdown>
        
          <NavDropdown title="Participate" id="basic-nav-dropdown">
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/forum"
                >
                  Forum
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/forumarchive"
                >
                  Forum Archive
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
              <Link
                 style={{ color: "#424753" }}
                 className="text-dark text-decoration-none dropdown-item"
                 to="https://reinherithackathon.cyens.org.cy/homepage/"
               >
                 ReInHerit Hackathon
               </Link>
          </NavDropdown>           
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
