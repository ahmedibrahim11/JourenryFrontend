// @Flow

import { ConnectionModel, ConnectionsDto } from "../../proxy/models";
export interface ConnectionsState {
  connections: ConnectionsDto;
  myConnections: Array;
  currentSelectedUserId: number;
}

export const ConnectionsInitialState: ConnectionsState = {
  connections: [],
  myConnections: [],
  currentUserId: 0
};
