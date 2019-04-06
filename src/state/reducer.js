import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";
import { uiReducer } from "./ui/reducer";
import { connectionReducer } from "./connections/reducer";
export const reducer = combineReducers({
  authorization: authorizationReducer,
  ui: uiReducer,
  connection: connectionReducer
});
