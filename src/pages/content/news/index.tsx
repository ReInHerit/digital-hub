import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsFeed from "../../../components/shared/NewsFeed";
import BaseLayout from "../../../components/static/BaseLayout";


const NewsPage: React.FC = () => {

  return (
    <BaseLayout>
      <Row>
        <Col lg={12}>
        <h1>News</h1>
          <NewsFeed/>
        </Col>
        {/* <Col>
          <Container className="shadow p-4">
            <h2 className="h5">Stuff happening somewhere else</h2>
            <p>Social media</p>
          </Container>
          <br />
          <Container className="shadow p-4">
            <h2 className="h5">Got to XYZ</h2>
            <p>Social media</p>
          </Container>
        </Col> */}
      </Row>
    </BaseLayout>
  )

}

export default NewsPage;