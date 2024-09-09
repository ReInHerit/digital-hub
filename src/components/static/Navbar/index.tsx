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
                  to="/about/dd779b45-1ce5-411a-9c80-f887f1ddb4c2"
                >
                  Project
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/12654fad-79d5-4c78-99a1-dd6d4b777cb1"
                >
                  Consortium
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/doc/2096bb3c-78d3-4d21-b9cc-992e6e170a2f"
                >
                  About the Digital Hub
            </Link>
            <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/doc/531acbfb-d484-4c46-9c5c-dc6ed84ef62a"
                >
                  FAQ
            </Link>
            <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/69482c10-2859-452f-b7fc-fdc901f9e0a1"
                >
                  Imprint
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/3b13e4f5-741f-472c-a58d-a9895088b486"
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
                  to="/resources"
                >
                  <b>Overview of all the ReInHerit resources</b>
                </Link>
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
                  to="/handbook/e85d8d26-e074-4f5e-b5f6-329d76bba0f0"
                >
                  Handbook
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/about/3b438d0d-239e-4027-a5c3-917263e373aa"
                >
                  Scientific Publications
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
                  to="/gamedoc/"
                >
                  Videogame Documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/eshopdoc/7ad7993f-c1c6-42dc-a183-192aae852ccd"
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
                  to="/firstperfdoc/"
                >
                  First performance documentation
                </Link>
                <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/secondperfdoc/"
                >
                  Second performance documentation
                </Link>
          </NavDropdown>
          
          <NavDropdown title="Discover" id="basic-nav-dropdown">
          <Link
                  className="text-dark text-decoration-none dropdown-item"
                  to="/visitorhub"
                >
                  <b>Overview of the ReInHerit products</b>
                </Link>
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
                to="/museumcalls/ecef209d-8276-4aff-90d7-4228f5238731"
              >
                Host an exhibition
              </Link>
              <Link
                style={{ color: "#424753" }}
                className="text-dark text-decoration-none dropdown-item"
                to="/museumcalls/96ee4e71-7184-4557-ac18-ca825fe33b05"
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
