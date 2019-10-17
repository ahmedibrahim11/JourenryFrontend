// @Flow
import { AnyAction } from "redux";
import { SettingState,SettingInitialState  } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.SEND_FEEDBACK_ACTION
  | actions.SEND_FEEDBACK_FAIL_ACTION
  | actions.SEND_FEEDBACK_SUCCESS_ACTION;

export function settingReducer(
  state: SettingState = SettingInitialState,
  action: Action
): SettingState {
  switch (action.type) {
    case types.SEND_FEEDBACK: {
      return {
        ...state,
        feedback:action.payload
      };
    }

    case types.SEND_FEEDBACK_SUCCESS: {
      return {
        ...state,
        isSubmit:true
        // username: action.payload.username
      };
    }

    case types.SEND_FEEDBACK_FAIL: {
      return {
        ...state,
       isSubmit:false,
       errorMessage:action.payload
      };
    }
    default:
      return state;
  }
}
