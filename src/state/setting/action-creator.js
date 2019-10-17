import * as types from "./actions";


import * as UiTypes from "../ui/actions";

import {settingProxyService} from "../../proxy"


export type SEND_FEEDBACK_ACTION={
    type:String,
    payload:any
};

export type SEND_FEEDBACK_SUCCESS_ACTION={
    type:String
};

export type SEND_FEEDBACK_FAIL_ACTION={
    type:String,
    payload:any
};



export async function SendFeedback(feedback:string) {
  debugger;
    debugger;
    return async (dispatch,getstate) => {
      const state = getstate();
      var userId = Number(state.authorization.token.id);
      dispatch(SubmitFeedback(feedback));
      dispatch({ type: UiTypes.UI_LOADING });
      let response = await settingProxyService.SumbitFeedback(feedback,userId);
      debugger;
      if (response.status === 200) {
        dispatch({ type: UiTypes.UI_LOADING });
        dispatch(SubmitFeedbackSuccess());
      } else {
        dispatch({ type: UiTypes.UI_LOADING });
        dispatch(SubmitFeedbackFail());
      }
    };
  }



  export function SubmitFeedback(feedback):SEND_FEEDBACK_ACTION{
   return{ type:types.SEND_FEEDBACK,payload:feedback};
  }

  export function SubmitFeedbackSuccess():SEND_FEEDBACK_SUCCESS_ACTION{
   return{type:types.SEND_FEEDBACK_SUCCESS};
  }


  export function SubmitFeedbackFail():SEND_FEEDBACK_FAIL_ACTION{
      const error="error when send your feedback please try again";
    return{type:types.SEND_FEEDBACK_FAIL,payload:error};
   }

