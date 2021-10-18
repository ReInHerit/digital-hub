import { REINHERIT_AUDIENCE } from "../types/reinherit";


export interface ReinheritTheme {
  BS_COLOR_CLASS: string;
  MAIN_COLOR: string;
}

export type ReinheritThemes = {
  [property in keyof REINHERIT_AUDIENCE]: ReinheritTheme;
}

export const reinheritThemes: ReinheritThemes = (() => {

  // add: #F2E205

  const VISITOR: ReinheritTheme = {
    BS_COLOR_CLASS: "primary",
    MAIN_COLOR: "#F2CB05"
  }

  const RESEARCHER: ReinheritTheme = {
    BS_COLOR_CLASS: "secondary",
    MAIN_COLOR: "#D93D93"
  }

  const POLICY_MAKER: ReinheritTheme = {
    BS_COLOR_CLASS: "warning",
    MAIN_COLOR: "#04B2D9"
  }

  const CH_PROFESSIONAL: ReinheritTheme = {
    BS_COLOR_CLASS: "light",
    MAIN_COLOR: "#8DBF41"
  }

  return {
    VISITOR,
    RESEARCHER,
    POLICY_MAKER,
    CH_PROFESSIONAL,
  }

})();

