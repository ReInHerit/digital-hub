import { ReinheritRESTMode, REINHERIT_AUDIENCE, REINHERIT_PERSONS } from "../types/reinherit";

type ReinheritStatics = {
  [property in keyof REINHERIT_AUDIENCE]: ReinheritStatic
}

type ReinheritStatic = {
  REST_MODE_VAL: ReinheritRESTMode;
  LABEL: string
}

export const reinheritStatics: ReinheritStatics = (() => {

  const VISITOR: ReinheritStatic = {
    REST_MODE_VAL: REINHERIT_PERSONS.VISITOR,
    LABEL: "Visitors"
  }

  const PROFESSIONAL: ReinheritStatic = {
    REST_MODE_VAL: REINHERIT_PERSONS.PROFESSIONAL,
    LABEL: "Professionals"
  }

  return {
    VISITOR,
    PROFESSIONAL
  }

})();