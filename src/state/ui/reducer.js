// @Flow
import { AnyAction } from "redux";
import { UiState, UiInitialState } from "./state";
// import * as actions from "./action-creator";
import * as types from "./actions";

// type Action = actions.L;

export function uiReducer(
  state: UiState = UiInitialState,
  action: any
): UiState {
  switch (action.type) {
    case types.UI_LOADING: {
      return {
        ...state,
        loading: !state.loading
      };
    }
    default:
      return state;
  }
}
