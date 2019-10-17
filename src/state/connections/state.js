// @Flow

import { ConnectionModel, ConnectionsDto } from "../../proxy/models";
export interface ConnectionsState {
  connections: ConnectionsDto;
  myConnections: Array;
  currentSelectedUserId: number;
  advancedFilter:Array;
  applyFilter:Boolean;
}

export const ConnectionsInitialState: ConnectionsState = {
  connections: [],
  myConnections: [],
  currentUserId: 0,
  advancedFilter:[],
  applyFilter:false,
};
