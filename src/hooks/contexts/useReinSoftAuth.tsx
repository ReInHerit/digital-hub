import React from "react";
import { useSoftAuth } from "../useSoftAuth";

interface ReinheritSoftAuthContextData {
  login: (userRole: string) => void;
  userRoles: string[];
  curUserRole: string;
  signedIn: boolean,
  logout: () => void
}

// created context
const ReinheritSoftAuthContext = React.createContext<undefined | ReinheritSoftAuthContextData>(undefined);

/**
 * Provides local storage based softAuth functionality to the 
 * Gatsby app based on context API.
 * @param props 
 * @returns 
 */
export const ReinheritSoftAuthProvider: React.FC = (props) => {

  // handles lightweight authentication
  const { curUserRole, login, userRoles, signedIn, logout } = useSoftAuth();

  // default values accesible via context api
  const contextObj: ReinheritSoftAuthContextData = {
    login,
    userRoles,
    curUserRole,
    signedIn,
    logout
  }

  return <ReinheritSoftAuthContext.Provider value={contextObj}>{props.children}</ReinheritSoftAuthContext.Provider>
}

/**
 * Exposes softAuth related functionality to calling component.
 * @returns 
 */
export const useReinSoftAuth = () => React.useContext(ReinheritSoftAuthContext)