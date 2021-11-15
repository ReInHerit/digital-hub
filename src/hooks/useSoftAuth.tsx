import React from "react"

type UserRolesType = "extern" | "admin"

// keys used in local storage
enum ReinAuthStoreKeys {
  SIGNED_IN = "reinauth_signedIn",
  USER_ROLE = "reinauth_userRole"
}

/**
 * Handles very lightweight authorization via local-storage.
 * @returns Object {
 * curUserRole - current active user role.
 * loggedIn - boolean if user is logged in.
 * login - allows to login. Needs certain user-roles as input.
 * logout - sets state to logout
 * userRoles - array of all available user-roles.
 * }
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
    const signedInVal = localStorage.getItem(ReinAuthStoreKeys.SIGNED_IN)
    const userRoleVal = localStorage.getItem(ReinAuthStoreKeys.USER_ROLE)

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

  

  /**
   * Prompts for user for password and checks if available in intern password map.
   * Sets state(s) to logged in.
   * @param userRole 
   * @returns 
   */
  const login = (userRole: string) => {
    if(!isBrowser)return;
    let pw = prompt("Please enter the administrator password")

    if (!(userRoles as string[]).includes(userRole)) return

    const pwMap = {
      admin: "testpw",
    }

    if (pwMap[userRole] === pw) {
      setSignedIn(true)
      setCurUserRole(userRole as UserRolesType)
      localStorage.setItem(ReinAuthStoreKeys.SIGNED_IN, "true")
      localStorage.setItem(ReinAuthStoreKeys.USER_ROLE, userRole)
    } 
  }

  /**
   * Sets states to logout.
   * @returns 
   */
  const logout = () => {
    if (!isBrowser) return
    setSignedIn(false)
    setCurUserRole("extern")
    localStorage.setItem(ReinAuthStoreKeys.SIGNED_IN, "false")
    localStorage.setItem(ReinAuthStoreKeys.USER_ROLE, "extern")
  }

  return {
    curUserRole,
    signedIn,
    userRoles,
    login,
    logout,
  }
}
