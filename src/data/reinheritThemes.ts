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
    MAIN_COLOR: "#F2CB05"
  }

  const PROFESSIONAL: ReinheritTheme = {
    BS_COLOR_CLASS: "light",
    MAIN_COLOR: "#8DBF41"
  }

  return {
    VISITOR,
    PROFESSIONAL
  }

})();

