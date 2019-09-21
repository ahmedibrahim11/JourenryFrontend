// @Flow
import { ProfileDataInitialState, ProfileDataState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_PROFILE_DATA_COMPLETING_Action
  | actions.PROFILE_DATA_COMPLETING_FAIL_Action
  | actions.PROFILE_DATA_COMPLETING_SUCCESS_Action
  | actions.PROFILE_DATA_Action
  | actions.USER_PROFILE_DATA_SUCCESS_Action;

export function profileDataCompletingReducer(
  state: ProfileDataState = ProfileDataInitialState,
  action: Action
): ProfileDataState {
  switch (action.type) {
    case types.ON_PROFILE_DATA_COMPLETING: {
      return {
        ...state,
        questions: action.payload
      };
    }

    case types.PROFILE_DATA_COMPLETING_SUCCESS:
    case types.PROFILE_DATA: {
      return {
        ...state,
        answers: action.payload
      };
    }
    case types.USER_PROFILE_DATA_SUCCESS_Action: {
      return {
        ...state,
        otherUserAnswers: action.payload
      };
    }
    case types.PROFILE_DATA_COMPLETING_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
