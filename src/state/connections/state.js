// @Flow

import { ConnectionModel, ConnectionsDto } from "../../proxy/models";
export interface ConnectionsState {
  connections: ConnectionsDto;
  requestedConnections: ConnectionsDto;
  currentSelectedUserId: number;
}

export const ConnectionsInitialState: ConnectionsState = {
  connections: [],
  requestedConnections: [],
  currentUserId: 0
};
