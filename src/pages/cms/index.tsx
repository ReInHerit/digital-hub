import { Link } from "gatsby"
import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"

const CMSDesc = () => {
  return (
    <BaseLayout>
      <h1>Manual CMS</h1>
      <p>How to provide data to the Digital Hub</p>
      <SideBarsLayout
        left={
          <>
            <h2 className="h5">Links</h2>
            <ul>
              <li>
                <a href="/admin/admin.html" target="_blank">
                  Login
                </a>
              </li>
            </ul>
          </>
        }
      >
        <h2 className="h5">Netlify CMS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <Link to="/doc/authorization">Check roles on documentation</Link>
        </p>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default CMSDesc
