// @Flow

import * as types from "./actions";
import { UserAnswer, AnswersDto } from "../../proxy";
import { profileDataCompletingProxyService } from "../../proxy";
import { State } from "react-native-gesture-handler";
/*************** */
export type ON_PROFILE_DATA_COMPLETING_Action = { type: String, payload: any };
export type PROFILE_DATA_COMPLETING_SUCCESS_Action = {
  type: String,
  payload: any
};
export type PROFILE_DATA_COMPLETING_FAIL_Action = {
  type: String,
  payload: String
};

/*************** */

export function onProfileDataCompleting(
  questions
): ON_PROFILE_DATA_COMPLETING_Action {
  return { type: types.ON_PROFILE_DATA_COMPLETING, payload: questions };
}

export function profileDataCompletingSuccess(
  answers: AnswersDto
): PROFILE_DATA_COMPLETING_SUCCESS_Action {
  return { type: types.PROFILE_DATA_COMPLETING_SUCCESS, payload: answers };
}

export function profileDataCompletingFail(): PROFILE_DATA_COMPLETING_FAIL_Action {
  const errorMsg = "Invalid Data";
  return { type: types.PROFILE_DATA_COMPLETING_FAIL, payload: errorMsg };
}
/*************** */

export async function getQuestions() {
  return async dispatch => {
    let response = await profileDataCompletingProxyService.getQuestions();
    token = await response.data;
    if (response.status === 200) {
      dispatch(onProfileDataCompleting(token));
    } else {
      dispatch(profileDataCompletingFail());
    }
  };
}

export async function postAnswers(userAnswers: UserAnswer[]) {
  debugger;

  return async (dispatch, getstate) => {
    const answers = [];
    const state = getstate();
    userAnswers.forEach(element => {
      answers.push({
        userId: 10002,
        value: element["answer"],
        questionId: element["questionId"]
      });
    });
    console.log(answers);
    let response = await profileDataCompletingProxyService.postAnswers(answers);
    token = await response.data;
    if (response.status === 200) {
      debugger;
      dispatch(profileDataCompletingSuccess(token));
    } else {
      dispatch(profileDataCompletingFail());
    }
  };
}
