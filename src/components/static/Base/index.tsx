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
        <p className="text-dark" style={{maxWidth:"80vw"}}>Our website uses Google Analytics cookies to measure use of the website, including number of visitors, which pages are viewed, and how frequently they are viewed. This helps to determine what is popular and can influence future content and development. The information collected by us will include IP Address, pages visited, browser type and operating system. The data will not and cannot be used to identify any user personally.
Users have the opportunity to set their computers to accept all cookies, to notify them when a cookie is issued, or not to receive cookies at any time.</p>
        <p>More information you'll find at the <Link to="/about/dataprot">data protection</Link> section.</p>
      </CookieConsent>
      {props.children}
    </>
  )
}

export default Base
