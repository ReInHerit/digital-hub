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
        className="rounded rounded-0 reincard"
        style={{ fontSize: ".95em", borderColor: "black" }}
      >
        <Link to={props.url} className="text-decoration-none text-dark">
          <Card.Body>
            <Card.Title style={{ fontSize: "1em" }}>{props.title}</Card.Title>
            <hr />
            <Card.Text>{props.body}</Card.Text>
            <br></br>
            {props.children}
          </Card.Body>
        </Link>
        {(props.footerContent || props.uid) && (
          <Card.Footer className="bg-white border-0">
            <small className="text-muted d-inline">
              {props.footerContent && props.footerContent}
              <br></br>
            </small>
          </Card.Footer>
        )}
      </Card>
    </Col>
  )
}

export default ReinGridCard
