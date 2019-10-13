// @Flow

import { ConnectionModel, ConnectionsDto } from "../../proxy/models";
export interface ConnectionsState {
  connections: ConnectionsDto;
  myConnections: Array;
  currentSelectedUserId: number;
  advancedFilter:Array;
}

export const ConnectionsInitialState: ConnectionsState = {
  connections: [],
  myConnections: [],
  currentUserId: 0,
  advancedFilter:[],
};
