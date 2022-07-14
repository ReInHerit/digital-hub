import {
  faBookOpen,
  faCog,
  faCommentDots,
  faTools,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import React from "react"
import { Link } from "gatsby"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Header: React.FC = () => {
  return (
    <div className="pt-3 mt-4 bg-white text-center">
      <div className="pb-3">
        <img
          className="pb-0 mb-0"
          style={{ maxWidth: "15vw", minHeight: "18vh" }}
          src="/images/thumbnails/make_it_your_own.JPG"
        ></img>
        <h2 style={{ marginTop: "-2vh", color: "grey" }} className="h4">
          ReInHerit Digital Hub
        </h2>

        <Link to="/resources">
          <Button variant="outline-light border text-center ps-4 pe-4 me-2">
            <FontAwesomeIcon
              icon={faTools}
              size="1x"
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>
            <small className="text-muted"> Resources</small>
          </Button>
        </Link>
        <Link to="/networkinghub">
          <Button variant="outline-light border text-center ps-4 pe-4 me-2">
            <FontAwesomeIcon
              icon={faCommentDots}
              size="1x"
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>
            <small className="text-muted"> Networking</small>
          </Button>
        </Link>
        <Link to="/visitorhub">
          <Button variant="outline-light border text-center ps-4 pe-4 me-2">
            <FontAwesomeIcon
              icon={faBookOpen}
              size="1x"
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>
            <small className="text-muted"> Content</small>
          </Button>
        </Link>
        <span className="border btn text-center ps-4 pe-4 me-2 rounded">
          <a
            className="text-decoration-none"
            href="https://www.facebook.com/ReInHerit/"
            target="_blank"
            aria-label="ReInHerit on facebook"
          >
            <FontAwesomeIcon
              className="ms-1"
              icon={faFacebook}
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>
          </a>
          <a
            className="text-decoration-none"
            href="https://linkedin.com/company/reinherit-h2020/"
            target="_blank"
            aria-label="ReInHerit on linkedin"
          >
            <FontAwesomeIcon
              className="ms-1"
              icon={faLinkedin}
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>{" "}
          </a>
          <a
            className="text-decoration-none"
            href="https://www.tiktok.com/@reinherit_"
            target="_blank"
            aria-label="ReInHerit on tiktok"
          >
            <FontAwesomeIcon
              className="ms-1"
              icon={faTiktok}
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>{" "}
          </a>
          <a
            className="text-decoration-none"
            href="https://mobile.twitter.com/reinherit_"
            target="_blank"
            aria-label="ReInHerit on twitter"
          >
            <FontAwesomeIcon
              className="ms-1"
              icon={faTwitter}
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>{" "}
          </a>
          <a
            className="text-decoration-none"
            href="https://www.instagram.com/reinherit_/"
            target="_blank"
            aria-label="ReInHerit on instagram"
          >
            <FontAwesomeIcon
              className="ms-1"
              icon={faInstagram}
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>{" "}
          </a>
        </span>
        <Link to="/cms" aria-label="ReInHerit on cms">
          <Button variant="outline-light border text-center ps-3 pe-3 me-2">
            <FontAwesomeIcon
              icon={faCog}
              size="1x"
              style={{ fontSize: "1.25em" }}
            ></FontAwesomeIcon>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Header
