// @Flow

import * as types from "./actions";
import { HttpClient } from "../../services/http-client/http-client-service";
import {
  authProxyService,
  TokenDto,
  UserLoginModel,
  ChangePasswordModel
} from "../../proxy";
import * as UiTypes from "../ui/actions";

var jwtDecode = require("jwt-decode");

/*************** */
export type ON_LOGIN_Action = { type: string, payload: any };
export type LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type LOGIN_FAIL_Action = { type: string, payload: string };

/*************** */
export type ON_CHANGE_PASSWORD_Action = { type: string, payload: any };

export type ON_CHANGE_PASSWORD_SUCCESS_Action = { type: string, payload: any };

export type ON_CHANGE_PASSWORD_FAIL_Action = {
  type: string,
  payload: string
};

export async function tryLogin(user: UserLoginModel) {
  let result = null;
  return async dispatch => {
    dispatch(onLogin(user));
    dispatch({ type: UiTypes.UI_LOADING });
    let response = await authProxyService.login(user);
    result = await response.json();
    var token = result["token"];
    if (token) {
      try {
        var decoded = jwtDecode(token);
        var finalToken: TokenDto = {};
        finalToken.role = decoded["Role"];
        finalToken.id = decoded["Id"];
        finalToken.isRegisterd = decoded["IsRegisterd"];
        finalToken.token = token;
      } catch (error) {
        console.log("err", error);
      }
    }
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch({ type: UiTypes.UI_LOADING });
      dispatch(success(finalToken));
    } else {
      dispatch({ type: UiTypes.UI_LOADING });
      dispatch(fail());

    }
  };
}
export async function tryChangePassword(user: ChangePasswordModel) {
  debugger;
  let token = null;
  return async (dispatch,getstate) => {
    const state = getstate();
    var userId = Number(state.authorization.token.id);
    dispatch(onChangePassword());
    dispatch({ type: UiTypes.UI_LOADING });
    let response = await authProxyService.changePassword(user,userId);
    debugger;
    // token = await response.json();
    if (response.status === 200) {
      dispatch({ type: UiTypes.UI_LOADING });
      dispatch(ChangePasswordSuccess());
    } else {
      dispatch({ type: UiTypes.UI_LOADING });
      dispatch(ChangePasswordFail());
   
    }
  };
}

export function onLogin(user): ON_LOGIN_Action {
  return { type: types.ON_LOGIN, payload: user };
}

export function success(token: TokenDto): LOGIN_SUCCESS_Action {
  return { type: types.LOGIN_SUCCESS, payload: token };
}

export function fail(): LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.LOGIN_FAIL, payload: errorMsg };
}

export function onChangePassword(user): ON_CHANGE_PASSWORD_Action {
  return { type: types.ON_CHANGE_PASSWORD };
}

export function ChangePasswordSuccess(): ON_CHANGE_PASSWORD_SUCCESS_Action {
  return { type: types.ON_CHANGE_PASSWORD_SUCCESS };
}

export function ChangePasswordFail(): ON_CHANGE_PASSWORD_FAIL_Action {
  const errorMsg = "Faild To ChangePassword";
  return { type: types.ON_CHANGE_PASSWORD_FAIL, payload: errorMsg };
}
