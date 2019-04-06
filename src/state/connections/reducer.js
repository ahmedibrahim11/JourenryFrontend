// @Flow
import { ConnectionsState, ConnectionsInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.LOAD_CONNECTIONS_ACTION
  | actions.SELECT_CONNECTION_ACTION
  | actions.GET_CONNECTION_BY_ID_ACTION;

export function connectionReducer(
  state: ConnectionsState = ConnectionsInitialState,
  action: Action
): connectionstate {
  switch (action.type) {
    case types.LOAD_ALL_CONNECTIONS: {
      debugger;
      return {
        ...state,
        connections: action.payload,
        currentUserId: 0
      };
    }
    case types.GET_CONNECTION_BY_ID: {
      return {
        ...state,
        currentUserId: action.payload
      };
    }
    default:
      return state;
  }
}
