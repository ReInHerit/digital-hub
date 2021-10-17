import { REINHERIT_AUDIENCE } from "../types/reinherit";


export interface ReinheritTheme {
  BS_COLOR_CLASS: string;
  MAIN_COLOR: string;
}

export type ReinheritThemes = {
  [property in keyof REINHERIT_AUDIENCE]: ReinheritTheme;
}

export const reinheritThemes: ReinheritThemes = (() => {

  const VISITOR: ReinheritTheme = {
    BS_COLOR_CLASS: "primary",
    MAIN_COLOR: "lightred"
  }

  const RESEARCHER: ReinheritTheme = {
    BS_COLOR_CLASS: "secondary",
    MAIN_COLOR: "lightblue"
  }

  const POLICY_MAKER: ReinheritTheme = {
    BS_COLOR_CLASS: "dark",
    MAIN_COLOR: "lightgreen"
  }

  const CH_PROFESSIONAL: ReinheritTheme = {
    BS_COLOR_CLASS: "light",
    MAIN_COLOR: "orange"
  }

  return {
    VISITOR,
    RESEARCHER,
    POLICY_MAKER,
    CH_PROFESSIONAL,
  }

})();

