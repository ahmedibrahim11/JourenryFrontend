import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";
import { UiInitialState } from "./";

import { ConnectionsInitialState } from "./connections/state";
import { ProfileDataInitialState } from "./profiledatacompleting/state";
export type State = {
  authorization: AuthorizationInitialState,
  ui: UiInitialState,
  connection: ConnectionsInitialState,
  profileDataCompleting: ProfileDataInitialState
};
