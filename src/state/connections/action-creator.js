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

export type FILTER_CONNECTIONS_ACTION = {
  type: string,
  payload: any
};

export type LOAD_MY_CONNECTIONS_ACTION = {
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
  return { type: types.LOAD_ALL_CONNECTIONS, payload: connections };
}

export function onFiltersLoaded(
  filteredConnections
): FILTER_CONNECTIONS_ACTION {
  return { type: types.FILTER_ALL_CONNECTIONS, payload: filteredConnections };
}

export function onMyConnectionsLoaded(connections): LOAD_MY_CONNECTIONS_ACTION {
  return { type: types.LOAD_ALL_MY_CONNECTIONS, payload: connections };
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
    payload: senderId
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
    payload: reciverId
  };
}

export function onFailer(): FAILER_ACTION {
  const errorMsg = "UNEXPECTED HAGA HASLET";
  return { type: types.FAILER, payload: errorMsg };
}

/************************************************************/

export function loadConnections(): LOAD_CONNECTIONS_ACTION {
  debugger;
  return async (dispatch, getState) => {
    const state = getState();
    let userId = state.authorization.token.id;
    let response = await connectionProxyService.getConnections(userId);
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
export function filterConnections(critirea: Object): FILTER_CONNECTIONS_ACTION {
  debugger;
  return async (dispatch, getState) => {
    const state = getState();
    let _finalFilter =[];
    for (var key in critirea) {
      if (critirea[key].value != "Any") {
        _finalFilter.push({QuestionId:key,value:critirea[key].value}) ;
      }
    }
    let response = await connectionProxyService.advancedFilter(_finalFilter);
    let conns;
    conns = await response.data;

    debugger;
    if (response.status === 200) {
      debugger;
      dispatch(onFiltersLoaded(conns));
    } else {
      dispatch(onFailer());
    }
  };
}
export function loadMyConnections(): LOAD_ALL_MY_CONNECTIONS {
  return async (dispatch, getState) => {
    const state = getState();
    let userId = state.authorization.token.id;
    debugger;

    let response = await connectionProxyService.getMyConnections(userId);
    let conns;
    conns = await response.data;
    if (response.status === 200) {
      debugger;
      dispatch(onMyConnectionsLoaded(conns));
    } else {
      dispatch(onFailer());
    }
  };
}

export function GetUserById(userId: number): SELECT_CONNECTION_ACTION {
  debugger;
  return async (dispatch, getState) => {
    debugger;
    const state = getState();
    let userId = state.authorization.token.id;

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
    let reciverId = state.authorization.token.id;
    debugger;
    let response = await connectionProxyService.acceptConnectionRequest(
      senderId,
      reciverId
    );

    if (response.status === 200) {
      debugger;
      dispatch(onAcceptingConnectionRequest(senderId));
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
    const reciverId = state.authorization.token.id;

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
    const senderId = state.authorization.token.id;

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
      dispatch(onSendConnectionRequest(reciverId));
    } else {
      dispatch(onFailer());
    }
  };
}
