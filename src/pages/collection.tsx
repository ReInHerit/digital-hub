import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Databasket from "../components/shared/Databasket";
import BaseLayout from "../components/static/BaseLayout";

const CollectionPage = () => {
  
  return <BaseLayout>
    <h2>Personal collection</h2>
    <Link className="text-secondary" to="/intern"><FontAwesomeIcon icon={faArrowAltCircleLeft}/> Back to personal space</Link>
    <br />
    <br />
    <Row>
      <Col md={2}>
        <div>
          <b className="text-secondary">What is this?</b>
        </div>
        <p>Here you find all your collected items...</p>
        <div>
          <b className="text-secondary">Training (5)</b>
        </div>
        <ul className="m-0 p-1 pt-0" style={{ listStyle: "none" }}>
          <li className="p-0 m-0">
              <small>
                <Link
                  to={`/content/training/test`}
                  className="text-dark"
                >
                  Sample material
                </Link>{" "}
                <span className="text-muted">
                  (12.4.2012)
                </span>
              </small>
            </li>
            <li className="p-0 m-0">
              <small>
                <Link
                  to={`/content/training/test`}
                  className="text-dark"
                >
                  Testme
                </Link>{" "}
                <span className="text-muted">
                  (12.4.2012)
                </span>
              </small>
            </li>
        </ul>
        <br/>
        <div>
          <b className="text-secondary">News (3)</b>
        </div>
        <ul className="m-0 p-1 pt-0" style={{ listStyle: "none" }}>
          <li className="p-0 m-0">
              <small>
                <Link
                  to={`/content/training/test`}
                  className="text-dark"
                >
                  Another sample
                </Link>{" "}
                <span className="text-muted">
                  (12.4.2012)
                </span>
              </small>
            </li>
        </ul>


      </Col>
      <Col md={10}>
        <Databasket></Databasket>
      </Col>
    </Row>
    
  
  </BaseLayout>

}


export default CollectionPage;