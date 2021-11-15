import React from "react"

type UserRolesType = "extern" | "admin"

/**
 * Handles very lightweight authorization via local-storage.
 * @returns
 */
export const useSoftAuth = () => {
  const [curUserRole, setCurUserRole] = React.useState<UserRolesType>("extern")
  const [signedIn, setSignedIn] = React.useState<boolean>(false)

  const userRoles: UserRolesType[] = ["admin", "extern"]

  // check necessary for gatsby
  const isBrowser = typeof window !== "undefined"

  /**
   * Retrieves login status and signed in user-role from
   * local storage.
   * @returns
   */
  const retrieveAuthStorage = (): [boolean, UserRolesType] => {
    if (!isBrowser) return

    // read out from local-storage
    const signedInVal = localStorage.getItem("reinauth_signedIn")
    const userRoleVal = localStorage.getItem("reinauth_userRole")

    // check + assign storage values.
    let signedIn: boolean = false
    let userRole: string = "extern";
    if (signedInVal) signedIn = JSON.parse(signedInVal)
    if (userRoleVal) userRole = userRoleVal;
    
    if(!userRoles.includes(userRole as UserRolesType)) userRole = "extern";

    return [signedIn, userRole as UserRolesType]
  }

  /**
   * Sets login state.
   */
  React.useEffect(() => {
    const [storeSignedInd, storeCurRole] = retrieveAuthStorage();
    setSignedIn(storeSignedInd);
    setCurUserRole(storeCurRole);
  }, [signedIn])

  

  const handleAuth = (userRole: string) => {
    let pw = prompt("Enter admin password")

    if (!(userRoles as string[]).includes(userRole)) return

    const pwMap = {
      admin: "testpw",
    }

    if (pwMap[userRole] === pw) {
      setSignedIn(true)
      setCurUserRole(userRole as UserRolesType)
      if (isBrowser) {
        console.log("SETTING NOW!");
        localStorage.setItem("reinauth_signedIn", "true")
        localStorage.setItem("reinauth_userRole", userRole)
      } else {
        return "false"
      }
    }
  }

  const logout = () => {
    if (!isBrowser) return
    setSignedIn(false)
    setCurUserRole("extern")
    localStorage.setItem("reinauth_signedIn", "false")
    localStorage.setItem("reinauth_userRole", "extern")
  }

  return {
    curUserRole,
    signedIn,
    userRoles,
    handleAuth,
    logout,
  }
}
