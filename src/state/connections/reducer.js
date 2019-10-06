// @Flow
import { ConnectionsState, ConnectionsInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";
import * as _ from "lodash";
type Action =
  | actions.LOAD_CONNECTIONS_ACTION
  | actions.LOAD_MY_CONNECTIONS_ACTION
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
    case types.LOAD_ALL_MY_CONNECTIONS: {
      debugger;
      return {
        ...state,
        myConnections: action.payload
      };
    }
    case types.SELECT_CONNECTION: {
      return {
        ...state,
        currentUserId: action.payload
      };
    }
    case types.ACCEPT_CONNECTION_REQUEST: {
      let currentConnectionsUpdatedStatus = _.map(
        state.myConnections,
        connection => {
          if (connection.Id == action.payload) {
            connection.Status = 2;
          }
          return connection;
        }
      );
      debugger;
      return {
        ...state,
        myConnections: currentConnectionsUpdatedStatus
      };
    }
    case types.REJECT_CONNECTION_REQUEST: {
      let currentConnectionsUpdatedStatus = state.myConnections.filter(
        connection => {
          connection.Id != action.payload;
        }
      );

      return {
        ...state,
        myConnections: currentConnectionsUpdatedStatus
      };
    }
    case types.SEND_CONNECTION_REQUEST: {
      let currentConnectionsUpdatedStatus = _.map(
        state.connections,
        connection => {
          if (connection.Id == action.payload) {
            connection.Status = 1;
          }
          return connection;
        }
      );
      debugger;
      return {
        ...state,
        connections: currentConnectionsUpdatedStatus
      };
    }
    default:
      return state;
  }
}
