/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../../../styles/index.css';
 import React from "react"
 import Header from "../Header";
 import {Container} from "react-bootstrap"
 import NavBar from "../Navbar";
 import Footer from "../Footer";
 
 interface Props {
   children?: any
 }
 
 const BaseLayout = ({ children }: Props) => {
   return (
     <React.Fragment>
       <Header />
       <NavBar/>
       <Container
       >
        {children}
       </Container>
       <Footer />
     </React.Fragment>
   )
 }
 
 
 export default BaseLayout
 