import * as types from "./actions";
import {
  ConnectionModel,
  ConnectionsDto,
  connectionProxyService
} from "../../proxy";
import { UserAnswer, AnswersDto } from "../../proxy";

/*************** */

export type LOAD_CONNECTIONS_ACTION = {
  type: string,
  payload: any
};

export type SELECT_CONNECTION_ACTION = {
  type: string,
  payload: any
};
export type ACCEPT_CONNECTION_REQUEST_ACTION = {
  type: string,
  payload: any
};

export type REJECT_CONNECTION_REQUEST_ACTION = {
  type: string,
  payload: any
};
export type SEND_CONNECTION_REQUEST_ACTION = {
  type: string,
  payload: any
};
export type FAILER_ACTION = {
  type: string,
  payload: string
};

/************************************************************/

export function onConnectionsLoaded(connections): LOAD_CONNECTIONS_ACTION {
  return { type: types.LOAD_ALL_CONNECTIONS, payload: connection };
}

export function connectionProfileDataViewing(
  userData: AnswersDto
): SELECT_CONNECTION_ACTION {
  return { type: types.SELECT_CONNECTION, payload: answers };
}

export function onAcceptingConnectionRequest(
  senderId: number
): ACCEPT_CONNECTION_REQUEST_ACTION {
  return {
    type: types.ACCEPT_CONNECTION_REQUEST,
    payload: { senderId, reciverId }
  };
}

export function onRejectingConnectionRequest(
  senderId: number
): REJECT_CONNECTION_REQUEST_ACTION {
  return {
    type: types.REJECT_CONNECTION_REQUEST,
    payload: { senderId, reciverId }
  };
}
export function onSendConnectionRequest(
  reciverId: number
): SEND_CONNECTION_REQUEST_ACTION {
  return {
    type: types.SEND_CONNECTION_REQUEST,
    payload: { senderId, reciverId }
  };
}

export function onFailer(): FAILER_ACTION {
  const errorMsg = "UNEXPECTED HAGA HASLET";
  return { type: types.FAILER, payload: errorMsg };
}
/************************************************************/

export function loadConnections(): LOAD_CONNECTIONS_ACTION {
  return async dispatch => {
    // const userId = state.authorization.token.userId;
    const journeyId = 1;
    let response = await connectionProxyService.getConnections(journeyId);
    let conns;
    debugger;
    conns = await response.data;
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(onConnectionsLoaded(conns));
    } else {
      dispatch(onFailer());
    }
  };
}

export function GetUserById(userId: number): SELECT_CONNECTION_ACTION {
  debugger;
  return async (dispatch, getState) => {
    debugger;
    // const state = getState();
    // dispatch({ type: UiTypes.UI_LOADING });
    let response = await connectionProxyService.getConnectionProfileData(
      userId
    );

    let userData = await response.data;
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(connectionProfileDataViewing(userData));
      //dispatch({ type: UiTypes.UI_LOADING });
    } else {
      //dispatch({ type: UiTypes.UI_LOADING });
      dispatch(onFailer());
    }
  };
}
export function acceptingConnectionRequest(
  senderId: Number
): ACCEPT_CONNECTION_REQUEST_ACTION {
  return async (dispatch, getState) => {
    const state = getState();
    const reciverId = state.authorization.token.userId;

    let response = await connectionProxyService.acceptConnectionRequest(
      senderId,
      reciverId
    );
    let userData;
    debugger;
    userData = await response.data;
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(onAcceptingConnectionRequest(userData));
    } else {
      dispatch(onFailer());
    }
  };
}
export function rejectingConnectionRequest(
  senderId: Number
): REJECT_CONNECTION_REQUEST_ACTION {
  return async (dispatch, getState) => {
    const state = getState();
    const reciverId = state.authorization.token.userId;

    let response = await connectionProxyService.rejectConnectionRequest(
      senderId,
      reciverId
    );
    let userData;
    debugger;
    userData = await response.data;
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(onRejectingConnectionRequest(userData));
    } else {
      dispatch(onFailer());
    }
  };
}
export function sendingConnectionRequest(
  reciverId: Number
): SEND_CONNECTIONS_ACTION {
  return async (dispatch, getState) => {
    const state = getState();
    const senderId = state.authorization.token.userId;

    let response = await connectionProxyService.sendConnectionRequest(
      senderId,
      reciverId
    );
    // let conns;
    // debugger;
    // conns = await response.data;
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(onSendConnectionRequest());
    } else {
      dispatch(onFailer());
    }
  };
}
