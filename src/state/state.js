import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";
import { UiInitialState } from "./";

import { ConnectionsInitialState } from "./connections/state";

export type State = {
  authorization: AuthorizationInitialState,
  ui: UiInitialState,
  connection: ConnectionsInitialState
};
