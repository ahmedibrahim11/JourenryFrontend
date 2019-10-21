import { combineReducers } from "redux";

import { authorizationReducer } from "./authorization/reducer";
import { uiReducer } from "./ui/reducer";
import { connectionReducer } from "./connections/reducer";
import { profileDataCompletingReducer } from "./profiledatacompleting/reducer";
import {settingReducer} from "./setting/reducer"
import {intialState} from './state'
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  authorization: authorizationReducer,
  ui: uiReducer,
  connection: connectionReducer,
  profileDataCompleting: profileDataCompletingReducer,
  setting:settingReducer
})

export const reducer = (state, action) => {
  debugger;
  if (action.type === 'USER_LOGOUT') {
    state = intialState;
    debugger;
    storage.removeItem('persist:root');
  }

  return appReducer(state, action)

}
