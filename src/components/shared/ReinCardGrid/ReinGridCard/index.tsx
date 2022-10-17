import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Card, Col} from "react-bootstrap"

interface Props {
  uid?: string
  url: string
  title: string
  body: string
  footerContent?: any
  children?: any
}

/**
 * Card component to be used in combination with ReinCardGrid.
 * @param props
 * @returns
 */
const ReinGridCard: React.FC<Props> = props => {
  return (
    <Col key={props.uid && props.uid}>
      <Card
        className="rounded rounded-5 reincard border-0 shadow"
        style={{ fontSize: ".95em"}}
      >
        <Link to={props.url} className="text-decoration-none text-dark">
          <Card.Body style={{minHeight:"200px"}}>
            <Card.Title style={{ fontSize: "1em" }}><FontAwesomeIcon style={{fill:"grey"}} icon={faFile} size="1x" className="me-md-1"></FontAwesomeIcon> {props.title}</Card.Title>
            <hr />
            <Card.Text>{props.body}</Card.Text>
            {props.children}
          </Card.Body>
        </Link>
        
          <Card.Footer className="border-0">
            <small className="text-muted d-inline">
              {props.footerContent && props.footerContent}
              <br></br>
            </small>
          </Card.Footer>
       
      </Card>
    </Col>
  )
}

export default ReinGridCard
