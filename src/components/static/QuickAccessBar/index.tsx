import { faComments } from "@fortawesome/free-regular-svg-icons"
import { faComment, faDatabase, faPlus, faPlusCircle, faRss, faSearch, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { Button, Container, Overlay, OverlayTrigger, Popover } from "react-bootstrap"
import BarElem from "./BarElem"

/**
 * Sidebar meant as quick access to the main use case-fulfilling systems
 * on the digital-hub.
 * @returns 
 */
const QuickAccessBar: React.FC = () => {

  return (
    <Container
      className="p-2 d-none d-lg-block reincard"
      style={{
        position: "fixed",
        right: "0%",
        top: "45%",
        maxWidth: "40px"
      }}
    >
      <BarElem
        faIcon={faUsers}
        href="https://github.com/ReInHerit/digital-exchange/issues"
        toolTipheader={"Quick access forum"}
        toolTipbody={<>Contribute to, or read through <strong>public</strong> discussions.</>}
      ></BarElem>
      <BarElem
        faIcon={faComment}
        href="https://gitter.im/ReInHerit/community"
        toolTipheader={"Quick access chat"}
        toolTipbody={<>Chat with fellow professionals.</>}
      ></BarElem>
      <BarElem
        faIcon={faPlusCircle}
        href="/admin/admin.html"
        toolTipheader={"Quick access CMS"}
        toolTipbody={<>Provide data to the Digital Hub.</>}
      ></BarElem>
      <BarElem
        faIcon={faDatabase}
        href="/collection"
        toolTipheader={"Quick access personal collection"}
        toolTipbody={<>Quick access personal collection.</>}
      ></BarElem>
      <BarElem
        faIcon={faSearch}
        href="/collection"
        toolTipheader={"Quick access search"}
        toolTipbody={<>Search across all the material provided.</>}
      ></BarElem>
      
      
    </Container>
  )
}

export default QuickAccessBar
