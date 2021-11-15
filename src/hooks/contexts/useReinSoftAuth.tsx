import React from "react";
import { useSoftAuth } from "../useSoftAuth";

interface ReinheritSoftAuthContextData {
  handleAuth: (userRole: string) => void;
  userRoles: string[];
  curUserRole: string;
  signedIn: boolean,
  logout: () => void
}

const ReinheritSoftAuthContext = React.createContext<undefined | ReinheritSoftAuthContextData>(undefined);

/**
 * Provides local storage based softAuth functionality to the 
 * Gatsby app.
 * @param props 
 * @returns 
 */
export const ReinheritSoftAuthProvider: React.FC = (props) => {

  // handles lightweight authentication
  const { curUserRole, handleAuth, userRoles, signedIn, logout } = useSoftAuth();

  
  const contextObj: ReinheritSoftAuthContextData = {
    handleAuth,
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