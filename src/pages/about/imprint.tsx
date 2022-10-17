import { Link } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import BaseLayout from "../../components/static/BaseLayout";
import MainHeading from "../../components/static/MainHeading";


const Imprint = () => {

  return (
    <BaseLayout
      pageTitle="Imprint | ReInHerit Digital Hub"
    >
      <MainHeading breadCrumb={[{label:"About", value:"/about"},{label:"Imprint", value:"/about/imprint"} ]}>Imprint</MainHeading>
      <Container fluid className="bg-white shadow p-sm-3 p-md-4 rounded">
        <p>
          The ReInHerit Digital Hub was developed in the H2020 project ReInHerit, funded by the European Union’s Horizon 2020 Research and Innovation programme under grant agreement No 101004545. 
        </p>
        <p>The development of the Digital Hub was carried out in Work Package 4, led by the University of Graz. 
          Staff at the <a target="_blank" href="http://informationsmodellierung.uni-graz.at">Centre for Information Modelling - Austrian Centre for Digital Humanities </a> was directly responsible for 
          the technical implementation of the Hub.
        </p>
        <br/>
        <p>Support and questions about the Hub email: <a href="mailto:digitalhub.reinherit@gmail.com">digitalhub.reinherit@gmail.com</a></p>
      
      <h3>Design and Infrastructure</h3>
      <p>Layout based on <a href="http://getbootstrap.com/">Bootstrap</a>. <br/>
      Technologies used for the Infrastructure of the Hub: <a href="https://www.gatsbyjs.com/">Gatsby.js</a>, <a href="https://www.netlifycms.org/">Netlify</a>, <a href="https://gitter.im/">Gitter</a>, <a href="https://github.com/">Github</a>, <a href="https://uploadcare.com/">UploadCare</a>, <a href="https://analytics.google.com/">Google Analytics</a>.</p>
      </Container>

    </BaseLayout>
  )

}


export default Imprint;