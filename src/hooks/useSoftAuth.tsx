import React from "react"

type UserRolesType = "extern" | "admin"

export const useSoftAuth = () =>  {

  const isBrowser = typeof window !== "undefined";

  const [curUserRole, setCurUserRole] = React.useState<UserRolesType>("extern");

  const retrieveAuthStorage = (): boolean => {
    console.log("AUTH RETRIEVAL");

    if(isBrowser){
      console.log("BROWSER HERE")
      console.log(localStorage.getItem("reinauth_signedIn"));
      return localStorage.getItem("reinauth_signedIn") ? JSON.parse(localStorage.getItem("reinauth_signedIn")) : false
    } else {
      return false
    }
  }

  


  const [signedIn, setSignedIn] = React.useState<boolean>(false); 

  React.useEffect(() => {
    setSignedIn(retrieveAuthStorage())
  }, [signedIn])


  const userRoles: UserRolesType[] = ["admin", "extern"]

  

  const handleAuth = (userRole: string) => {

    let pw = prompt("Enter admin password");

    if(!(userRoles as string[]).includes(userRole))return;

    const pwMap = {
      admin: "testpw"
    }

    if(pwMap[userRole] === pw){
      setSignedIn(true)
      setCurUserRole(userRole as UserRolesType)
      if(isBrowser) {
        localStorage.setItem("reinauth_signedIn", "true")
      } else {
        return "false"
      }
    }
  }

  const logout = () => {
    if(!isBrowser)return;
    setSignedIn(false)
    setCurUserRole("extern");
    localStorage.setItem("reinauth_signedIn", "false")
  }

  return {
    curUserRole,
    signedIn,
    userRoles,
    handleAuth,
    logout
  }

}