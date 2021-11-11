
export interface REINHERIT_AUDIENCE {
  VISITOR: "visitor",
  PROFESSIONAL: "professional"
}

export enum REINHERIT_PERSONS {
  VISITOR = "visitor",
  PROFESSIONAL = "professional"
}

export type ReinheritRESTMode = REINHERIT_PERSONS.PROFESSIONAL | REINHERIT_PERSONS.VISITOR

export enum ReinheritModeClassMap {
  visitor = "primary",
  researcher = "secondary"
}

export enum REINHERIT_CONTENT_TYPE {
  NEWS = "news",
  TRAINING = "training",
  APPS = "app",
  GAME = "game",
  EXHIBITION = "exhibition",
  PERFORMANCE = "performance",
  SHOP = "shop"
}