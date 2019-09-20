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
export type PROFILE_DATA_Action = { type: String, payload: any };

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

export function profileDataCompleteted(
  answers: AnswersDto
): PROFILE_DATA_Action {
  return { type: types.PROFILE_DATA, payload: answers };
}
/*************** */

export async function getQuestions() {
  return async dispatch => {
    let response = await profileDataCompletingProxyService.getQuestions();
    token = await response.data;
    debugger;
    if (response.status === 200) {
      dispatch(onProfileDataCompleting(token));
    } else {
      dispatch(profileDataCompletingFail());
    }
  };
}

export function getUserAnswers() {
  return async (dispatch, getstate) => {
    debugger;
    const state = getstate();
    var userId = state.authorization.token.id;
    let response = await profileDataCompletingProxyService.getUserAnswers(
      userId
    );
    token = await response.data;
    console.log(token);
    if (response.status === 200) {
      dispatch(profileDataCompleteted(token));
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
    var userId = state.authorization.token.id;
    debugger;
    userAnswers.forEach(element => {
      answers.push({
        userId: userId,
        value: element["answer"],
        questionId: element["questionId"]
      });
    });
    console.log(answers);
    let response = await profileDataCompletingProxyService.postAnswers(
      answers,
      userId
    );
    token = await response.data;
    if (response.status === 200) {
      debugger;
      dispatch(profileDataCompletingSuccess(token));
    } else {
      dispatch(profileDataCompletingFail());
    }
  };
}

export async function updateUserAnswers(userAnswers: UserAnswer[]) {
  debugger;
  return async (dispatch, getstate) => {
    const answers = [];
    const state = getstate();
    var userId = state.authorization.token.id;
    debugger;
    userAnswers.forEach(element => {
      answers.push({
        userId: userId,
        value: element["Value"],
        questionId: element["QuestionId"]
      });
    });
    console.log(answers);
    let response = await profileDataCompletingProxyService.updateAnswers(
      answers,
      userId
    );
    token = await response.data;
    if (response.status === 200) {
      debugger;
      dispatch(profileDataCompletingSuccess(token));
    } else {
      dispatch(profileDataCompletingFail());
    }
  };
}
