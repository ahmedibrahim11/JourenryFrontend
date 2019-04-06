import * as types from "./actions";
import {
  ConnectionModel,
  ConnectionsDto,
  connectionProxyService
} from "../../proxy";

// type State = {
//   CONNECTIONS: ?(ConnectionModel[])
// };
/*************** */

export type LOAD_CONNECTIONS_ACTION = {
  type: string,
  payload: Object<ConnectionModel>
};

export type GET_CONNECTION_BY_ID_ACTION = {
  type: string,
  payload: Object<ConnectionModel>
};

export type SELECT_CONNECTION_ACTION = {
  type: string,
  payload: number
};

/*************** */

export function loadConnections(): LOAD_CONNECTIONS_ACTION {
  return async dispatch => {
    // const state = getState();
    // dispatch({ type: UiTypes.UI_LOADING });
    // const userId = state.authorization.token.userId;
    const journeyId = 1;
    let response = await connectionProxyService.getConnections(journeyId);
    let conns;
    debugger;
    conns = await response.data;
    debugger;
    if (response.status === 200) {
      debugger;
      //dispatch({ type: UiTypes.UI_LOADING });
      dispatch({ type: types.LOAD_ALL_CONNECTIONS, payload: conns });
    } else {
      //dispatch({ type: UiTypes.UI_LOADING });
    }
  };
}

export function GetUserById(userId: number): GET_CONNECTION_BY_ID_ACTION {
  debugger;
  return async (dispatch, getState) => {
    debugger;
    // const state = getState();
    // dispatch({ type: UiTypes.UI_LOADING });
    let response = await connectionProxyService.getCONNECTIONById(CONNECTIONId);
    let req: ConnectionsDto;
    req = await response.json();
    debugger;
    if (response.status === 200) {
      debugger;
      dispatch({ type: types.GET_CONNECTION_BY_ID, payload: req });
      //dispatch({ type: UiTypes.UI_LOADING });
    } else {
      dispatch({ type: UiTypes.UI_LOADING });
    }
  };
}
