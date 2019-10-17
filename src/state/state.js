import {
  AuthorizationState,
  AuthorizationInitialState
} from "./authorization/state";
import { UiInitialState } from "./";

import { ConnectionsInitialState } from "./connections/state";
import { ProfileDataInitialState } from "./profiledatacompleting/state";
import {SettingState,SettingInitialState} from "./setting/state";
export type State = {
  authorization: AuthorizationInitialState,
  ui: UiInitialState,
  connection: ConnectionsInitialState,
  profileDataCompleting: ProfileDataInitialState,
  setting:SettingInitialState
};
