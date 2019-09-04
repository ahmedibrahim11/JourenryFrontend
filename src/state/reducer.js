import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";
import { uiReducer } from "./ui/reducer";
import { connectionReducer } from "./connections/reducer";
import { profileDataCompletingReducer } from "./profiledatacompleting/reducer";

export const reducer = combineReducers({
  authorization: authorizationReducer,
  ui: uiReducer,
  connection: connectionReducer,
  profileDataCompleting: profileDataCompletingReducer
});
