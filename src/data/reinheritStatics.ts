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

  const RESEARCHER: ReinheritStatic = {
    REST_MODE_VAL: REINHERIT_PERSONS.RESEARCHER,
    LABEL: "Researcher"
  }

  const POLICY_MAKER: ReinheritStatic = {
    REST_MODE_VAL: REINHERIT_PERSONS.POLICY_MAKER,
    LABEL: "Policy-makers"
  }

  const CH_PROFESSIONAL: ReinheritStatic = {
    REST_MODE_VAL: REINHERIT_PERSONS.CH_PROFESSIONAL,
    LABEL: "CH-professionals"
  }

  return {
    VISITOR,
    RESEARCHER,
    POLICY_MAKER,
    CH_PROFESSIONAL
  }

})();