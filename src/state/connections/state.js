// @Flow

import { ConnectionModel } from "../../proxy/models";
export interface ConnectionsState {
  connections: ConnectionModel[];
  currentSelectedUserId: number;
}

export const ConnectionsInitialState: ConnectionsState = {
  connections: [],
  currentUserId: 0
};
