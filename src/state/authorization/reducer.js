// @Flow
import { AnyAction } from "redux";
import { AuthorizationState, AuthorizationInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_LOGIN_Action
  | actions.LOGIN_SUCCESS_Action
  | actions.LOGIN_FAIL_Action
  | actions.ON_REGISTER_Action
  | actions.REGISTER_SUCCESS_Action
  | actions.REGISTER_FAIL_Action
  | actions.ON_CHANGE_PASSWORD_Action
  | actions.ON_CHANGE_PASSWORD_SUCCESS_Action
  | actions.ON_CHANGE_PASSWORD_FAIL_Action;

export function authorizationReducer(
  state: AuthorizationState = AuthorizationInitialState,
  action: Action
): AuthorizationState {
  switch (action.type) {
    case types.ON_LOGIN: {
      return {
        ...state,
        loading: true,
        username: action.payload.username
      };
    }

    case types.LOGIN_SUCCESS: {
      debugger;
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        loading: false
        // username: action.payload.username
      };
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
        loading: false
      };
    }

    case types.ON_REGISTER: {
      return {
        ...state,
        loading: true
      };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        loading: false
      };
    }

    case types.REGISTER_FAIL: {
      return {
        ...state,
        isRegistered: false,
        errorMessage: action.payload
      };
    }

    case types.ON_CHANGE_PASSWORD: {
      return {
        ...state
      };
    }

    case types.ON_CHANGE_PASSWORD_SUCCESS: {
      debugger;
      return {
        ...AuthorizationInitialState
      };
    }

    case types.ON_CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        isChange: false,
        errorMessage: action.payload
      };
    }

    default:
      return state;
  }
}
