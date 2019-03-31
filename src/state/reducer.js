import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";
import { uiReducer } from "./ui/reducer";

export const reducer = combineReducers({
  authorization: authorizationReducer,
  ui: uiReducer
});
