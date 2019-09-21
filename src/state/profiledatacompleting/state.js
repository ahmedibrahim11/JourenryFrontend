// @Flow

import { AnswersDto } from "../../proxy/models";
export interface ProfileDataState {
  questions: Array;
  answers: AnswersDto;
  otherUserAnswers:AnswersDto;
  error: String;
}

export const ProfileDataInitialState: ProfileDataState = {
  questions: [],
  answers: [],
  otherUserAnswers:[],
  error: ""
};
