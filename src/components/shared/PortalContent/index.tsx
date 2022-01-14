import { faComments, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faBook, faCalendarDay, faDatabase, faPlusCircle, faRss, faToolbox, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import React from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import { reinheritStatics } from "../../../data/reinheritStatics";
import { useReinTheme } from "../../../hooks/contexts/useReinTheme";
import ReinCardGrid from "../ReinCardGrid"
import ReinGridCard from "../ReinCardGrid/ReinGridCard"

/** 
 * Handles content displayed on the portal page. 
 * 
*/
const PortalContent = () => {

  const { theme } = useReinTheme();

  return (
    <>
      {/* <h1 style={{color: theme.styles.MAIN_COLOR}}>Portal</h1> */}
      <h1>Portal</h1>
      <Breadcrumb>
        <Breadcrumb.Item><Link to={`/?mode=${theme.mode}`}>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{ reinheritStatics[theme.groupKey].LABEL} Portal</Breadcrumb.Item>
      </Breadcrumb>
      
      <ReinCardGrid>
        <ReinGridCard
          title="What's new?"
          excerpt="News about cultural heritage, digital museology, uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          faIcon={faRss}
          targetAudience={["VISITOR", "PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="News"
        ></ReinGridCard>
        <ReinGridCard
          title="Explore digital exhibitions"
          excerpt="dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          faIcon={faUniversity}
          targetAudience={["VISITOR", "PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="Digital Exhibitions"
        ></ReinGridCard>
        <ReinGridCard
          title="Watch performances"
          excerpt="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          faIcon={faCalendarDay}
          targetAudience={["VISITOR", "PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="Performances"
        ></ReinGridCard>
        <ReinGridCard
          title="Browse through toolkit"
          excerpt="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          faIcon={faToolbox}
          targetAudience={["VISITOR", "PROFESSIONAL"]}
          type="news"
          url="/tools"
          footerContent="Toolkit"
        ></ReinGridCard>
        <ReinGridCard
          title="Manage personal collection"
          excerpt="Small description of..."
          faIcon={faDatabase}
          targetAudience={["VISITOR", "PROFESSIONAL"]}
          type="news"
          url="/collection"
          footerContent="Collected items"
        ></ReinGridCard>
        <ReinGridCard
          title="Provide data for the Hub"
          excerpt="Small description of..."
          faIcon={faPlusCircle}
          targetAudience={["PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="CMS"
        ></ReinGridCard>
        <ReinGridCard
          title="Exchange with others"
          excerpt="Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          faIcon={faComments}
          targetAudience={["PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="Chat"
        ></ReinGridCard>
        <ReinGridCard
          title="Get the technical documentation"
          excerpt="Small description of..."
          faIcon={faNewspaper}
          targetAudience={["PROFESSIONAL"]}
          type="news"
          url="/doc"
          footerContent="Documentation"
        ></ReinGridCard>
        <ReinGridCard
          title="Contact the project team"
          excerpt="Small description of..."
          faIcon={faNewspaper}
          targetAudience={["PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="About"
        ></ReinGridCard>
        <ReinGridCard
          title="Project aims and background"
          excerpt="Small description of..."
          faIcon={faNewspaper}
          targetAudience={["PROFESSIONAL"]}
          type="news"
          url="/news"
          footerContent="General"
        ></ReinGridCard>
      </ReinCardGrid>
    </>)

}


export default PortalContent;