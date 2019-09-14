// @Flow

import * as types from "./actions";
import { HttpClient } from "../../services/http-client/http-client-service";
import {
  authProxyService,
  TokenDto,
  UserLoginModel,
  UserRegisterModel
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

/************************* */
export type ON_REGISTER_Action = { type: string, payload: any };

export type REGISTER_SUCCESS_Action = { type: string, payload: any };

export type REGISTER_FAIL_Action = { type: string, payload: string };

/*************************** */

export async function tryLogin(user: UserLoginModel) {
  let result = null;
  return async dispatch => {
    dispatch(onLogin(user));
    dispatch({ type: UiTypes.UI_LOADING });
    let response = await authProxyService.login(user);
    result = await response.json();
    debugger;
    var token = result["token"];
    debugger;
    if (token) {
      try {
        var decoded = jwtDecode(token);
        var finalToken: TokenDto = {};
        finalToken.role = decoded["Role"];
        finalToken.id = decoded["Id"];
        finalToken.isRegisterd = decoded["IsRegisterd"];
        finalToken.token = token;
        debugger;
        console.log("final", finalToken);
      } catch (error) {
        console.log("err", error);
      }
    }

    debugger;

    if (response.status === 200) {
      debugger;
      dispatch(success(finalToken));
      //dispatch({ type: UiTypes.UI_LOADING });
    } else {
      dispatch(fail());
      //dispatch({ type: UiTypes.UI_LOADING });
    }
  };
}

export async function tryRegister(user: UserRegisterModel) {
  debugger;
  let token = null;
  return async dispatch => {
    dispatch(onRegister(user));
    dispatch({ type: UiTypes.UI_LOADING });
    let response = await authProxyService.register(user);

    token = await response.json();
    if (response.status === 200) {
      // HttpClient.requestInterceptor.push(request => {
      //   let _token: TokenDto;
      //   if (token) _token = token;
      //   request.headers = Object.assign({}, request.headers, {
      //     Authorization: `bearer ${_token.access_token}`
      //   });
      //   return request;
      // });
      dispatch(registerSuccess());
      // dispatch({ type: UiTypes.UI_LOADING });
    } else {
      dispatch(registerFail());
      dispatch({ type: UiTypes.UI_LOADING });
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

export function onRegister(user): ON_REGISTER_Action {
  return { type: types.ON_REGISTER, payload: user };
}

export function registerSuccess(): REGISTER_SUCCESS_Action {
  return { type: types.REGISTER_SUCCESS };
}

export function registerFail(): REGISTER_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.REGISTER_FAIL, payload: errorMsg };
}
