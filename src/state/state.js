import {
    AuthorizationState,
    AuthorizationInitialState
} from "./authorization/state";
import {
    UiInitialState
} from "./";

export type State = {
    authorization: AuthorizationInitialState,
    ui: UiInitialState

};
