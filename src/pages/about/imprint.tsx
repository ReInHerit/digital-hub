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
      <MainHeading subText="Funding" breadCrumb={[{label:"About", value:"/about"},{label:"Imprint", value:"/about/imprint"} ]}>Imprint</MainHeading>
      <Container fluid className="bg-white shadow p-sm-3 p-md-4 rounded">
        <p>
          This hub was developed in the course of the <Link to="/about">project ReInHerit</Link>, which was funded by the European Union’s Horizon 2020 research and innovation programme under grant agreement No 101004545. 
        </p>
        <h2 className="pt-1">Project lead, members and data protection for external users</h2>
        <Link to="/about/team">Team description</Link>
        <br/>
        <Link to="/about/dataprot">Data protection</Link>
        <h2 className="pt-3">Publisher, development and implementation</h2>
        <p>Institute Centre for Information Modelling - Austrian Centre for Digital Humanities</p>
        <p>Elisabethstraße 59/III</p>
        <p>A-8010 Graz</p>
        <a target="_blank" href="http://informationsmodellierung.uni-graz.at">http://informationsmodellierung.uni-graz.at</a>
        <br/>
        <br/>
        <a href="mailto:digitalhub.reinherit@gmail.com">digitalhub.reinherit@gmail.com</a>
      </Container>

    </BaseLayout>
  )

}


export default Imprint;