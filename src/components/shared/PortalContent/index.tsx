import { Link } from "gatsby";
import React from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import { reinheritStatics } from "../../../data/reinheritStatics";
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";


const PortalContent = () => {

  const { theme } = useReinTheme();

  return (
    <>
      <Link to="/collection"> Visit your collection</Link>
      <a href="/admin/admin.html" target="_blank">Link to Netlify CMS</a>
      <Link to="/doc" className="text-dark text-decoration-none">Documentation</Link>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item><Link to={`/?mode=${theme.mode}`}>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{ reinheritStatics[theme.groupKey].LABEL} Portal</Breadcrumb.Item>
      </Breadcrumb>
      <h1 style={{color: theme.styles.MAIN_COLOR}}>{reinheritStatics[theme.groupKey].LABEL}</h1>
      <h2>Explore the content of the web page</h2>
      <Row xs={1} md={2} lg={3} xl={3} className="g-5">

        <Col key={"col_1"}>
          <Link to={`/content/training?mode=${reinheritStatics[theme.groupKey].REST_MODE_VAL}`} className="text-decoration-none text-dark">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Training</Card.Title>
                <Card.Text>
                  This is a longer card with 
                </Card.Text>
                <br />
                <br />
                <br />
              </Card.Body>
            </Card>
          </Link>
        </Col>
        
        {theme.groupKey === "VISITOR" ? [2,3,4,5,6].map((val, i) => <Col key={"col_" + i}>
          <Link to="#" className="text-decoration-none text-dark">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>{val}</Card.Title>
                <Card.Text>
                  This is a longer card with 
                </Card.Text>
                <br />
                <br />
                <br />
              </Card.Body>
            </Card>
          </Link>
        </Col>) : <h2>Only for visitors render rest!</h2>}
    </Row>
    </>)

}


export default PortalContent;