import React from "react"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css"
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
config.autoAddCss = false /* eslint-disable import/first */

interface Props {
  children: JSX.Element | JSX.Element[]
}

/**
 * Handles base setup of PageComponents fr the Reinherit project via Gatsby.
 */
const Base: React.FC<Props> = props => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        enableDeclineButton
        style={{background:"white"}}
        // disableStyles={true}
        buttonClasses="btn btn-primary"
        containerClasses="p-md-4 col-lg-12 bg-white border-top border-1 border-dark"
      >
        <h2 className="h6">Cookies &amp; privacy</h2>
        <p className="text-dark">Do you want to allow the digital hub to collect your personal usage data (via cookies)?</p>
        <p>More information you'll find at the <Link to="/about/dataprot">data protection</Link> section.</p>
      </CookieConsent>
      {props.children}
    </>
  )
}

export default Base
