import React from "react"
import { useReinSoftAuth } from "../../../hooks/contexts/useReinSoftAuth";
import {Button} from "react-bootstrap"

const SoftAuthForm = () => {

  const { curUserRole, signedIn, handleAuth, logout } = useReinSoftAuth();

  return <>
    <p>Your are logged in as: {curUserRole}</p>
    <p>Your login status is: {signedIn ? "logged-in" : "logged-out"}</p>

    <p>Passwort: 'testpw'</p>
    <Button onClick={() => handleAuth && handleAuth("admin")}>Login</Button>
    <br />
    <br />
    <Button onClick={() => logout()}>Logout</Button>
    <br />
    <br />
    { signedIn ? <a href="/admin/admin.html" target="_blank">Link to Netlify CMS</a> : null}
  </>

}


export default SoftAuthForm;