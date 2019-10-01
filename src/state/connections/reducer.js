// @Flow
import { ConnectionsState, ConnectionsInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.LOAD_CONNECTIONS_ACTION
  | actions.SELECT_CONNECTION_ACTION
  | actions.ACCEPT_CONNECTION_REQUEST_ACTION
  | actions.REJECT_CONNECTION_REQUEST_ACTION
  | actions.SEND_CONNECTION_REQUEST_ACTION;

export function connectionReducer(
  state: ConnectionsState = ConnectionsInitialState,
  action: Action
): connectionstate {
  switch (action.type) {
    case types.LOAD_ALL_CONNECTIONS: {
      debugger;
      return {
        ...state,
        connections: action.payload
      };
    }
    case types.SELECT_CONNECTION: {
      return {
        ...state,
        currentUserId: action.payload
      };
    }
    case types.ACCEPT_CONNECTION_REQUEST: {
      let currentRequestedConnections = state.requestedConnections.filter(
        u => u.requestedConnections.id != action.payload.id
      );
      return {
        ...state,
        requestedConnections: currentRequestedConnections,
        connections: connections.push(action.payload)
      };
    }
    case types.REJECT_CONNECTION_REQUEST: {
      let currentRequestedConnections = state.requestedConnections.filter(
        u => u.requestedConnections.id != action.payload.id
      );
      return {
        ...state,
        requestedConnections: currentRequestedConnections
      };
    }
    case types.SEND_CONNECTION_REQUEST:
    default:
      return state;
  }
}
