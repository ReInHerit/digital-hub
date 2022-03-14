import React from "react"
import SideBarsLayout from "../../components/shared/Layout/SideBarsLayout"
import BaseLayout from "../../components/static/BaseLayout"
import DocNav from "../../components/static/DocNav"

const Authorization = () => {
  return (
    <BaseLayout>
      <h2>Authorization</h2>
      <p>Description of the underlying auth proccesses in ReInHerit.</p>
      <br />
      <SideBarsLayout left={<DocNav />}>
        <h3>Roles in the Digital Hub</h3>
        <ol>
          <li>
            <b>Anonymous</b> (=Visitor-Lvl): no account whatsoever, see public chatroom
            content, read digi hub ---{" "}
          </li>
          <li>
            <b>Unknown</b> (=Professional Lvl) (account - OAUTH via github / twitter /
            gitlab): join public rooms, get invited to all rooms, add people
            (when access to chatroom), no CMS --- No Reinherit Github member +
            No Team Moderator + Any OAUTH method
          </li>
          <li>
            <b>Member</b>: Create chatrooms (public / private), invite others, no CMS.
            --- Reinherit Github member + NO TEAM MODERATOR ASSIGNMENT + Github
            acc required
          </li>
          <li>
            <b>Moderator</b>: full CMS Access, full chat access (except from private)
            --- Reinherit Github member + Team Moderator Github + Github acc
            required
          </li>
          <li>
            <b>Admin</b>: Full access (github dev environment / deployment locations
            etc.)
          </li>
        </ol>
      </SideBarsLayout>
    </BaseLayout>
  )
}

export default Authorization