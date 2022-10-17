import { Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const CMSDesc = () => {
  return (
    <BaseLayout
      pageTitle="CMS | ReInHerit Digital Hub"
    >
      <MainHeading 
        subHeading="Access to the content management system used for the ReInHerit digital hub"
        subText="Guidelines, support, and login link for adding content to the digital hub."
        breadCrumb={[
          {label:"CMS Access", value:"/cms"}
        ]}
      >CMS Access</MainHeading>
      <Container fluid className="bg-white shadow p-sm-3 p-md-4 rounded">
      <SideBarsLayout
        left={
          <>
            <h2 className="h5">Important links</h2>
            <ul>
              <li>
                <a href="/admin/admin.html" target="_blank">
                  CMS Login
                </a>
              </li>
               
            </ul>
          </>
        }
      >
        <h2 className="h5">Overview</h2>
        <p>
          The digital hub is a static website, paired with the content management system Netlify. Access to the CMS enables all ReInHerit Consortium members to 
          add material to the Digital Hub.        
          Currently it is not planned to open up the CMS access to a broader public. Nevertheless, if you wish to contribute, 
          you can email <a href="mailto:digitalhub.reinherit@gmail.com">the Digital Hub admin staff</a>.
        </p>
        <h2 className="h5">Prerequisites</h2>
        <ol>
          <li>Valid <a href="https://github.com/">GitHub</a> account.</li>
          <li>Appropriate level of access granted by the Hub admins (please contact the Digital Hub development team, providing your GitHub username).</li>
        </ol>
      </SideBarsLayout>
      </Container>
    </BaseLayout>
  )
}

export default CMSDesc
