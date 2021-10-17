
export interface REINHERIT_AUDIENCE {
  VISITOR: "visitor",
  RESEARCHER: "researcher",
  POLICY_MAKER: "policy-maker",
  CH_PROFESSIONAL: "ch-professional"
}

export enum REINHERIT_PERSONS {
  VISITOR = "visitor",
  RESEARCHER = "researcher",
  CH_PROFESSIONAL = "ch-professional",
  POLICY_MAKER = "policy-maker"
}

export type ReinheritRESTMode = REINHERIT_PERSONS.RESEARCHER | REINHERIT_PERSONS.VISITOR | REINHERIT_PERSONS.CH_PROFESSIONAL | REINHERIT_PERSONS.POLICY_MAKER

export enum ReinheritModeClassMap {
  visitor = "primary",
  researcher = "secondary"
}