import React from "react"
import { Col, Row } from "react-bootstrap";
import SideBarsLayout from "../../../components/shared/Layout/SideBarsLayout";
import BaseLayout from "../../../components/static/BaseLayout";

const CMSDesc = () => {



  return <BaseLayout>
    <h1>Manual CMS</h1>
    <p>How to provide data to the Digital Hub</p>
    <SideBarsLayout
      left={<>
        <h2 className="h5">Links</h2>
      <ul>
        <li>
          <a href="/admin/admin.html" target="_blank">Login</a>
        </li>
      </ul></>}
    >
    <h2 className="h5">Netlify CMS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Roles in the Hub</h3>
        <ol>
          <li>Anonymous (=Visitor-Lvl): no account whatsoever, see public chatroom content, read digi hub --- </li>
          <li>Unknown (=Professional Lvl) (account - OAUTH via github / twitter / gitlab): join public rooms, get invited to all rooms, add people (when access to chatroom), no CMS --- No Reinherit Github member + No Team Moderator + Any OAUTH method</li>
          <li>Member: Create chatrooms (public / private), invite others, no CMS. --- Reinherit Github member + NO TEAM MODERATOR ASSIGNMENT + Github acc required</li>
          <li>Moderator: full CMS Access, full chat access (except from private) --- Reinherit Github member + Team Moderator Github + Github acc required</li>
        </ol>
    
    </SideBarsLayout>
  </BaseLayout>;

}

export default CMSDesc;