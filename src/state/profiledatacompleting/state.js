// @Flow

import { AnswersDto } from "../../proxy/models";
export interface ProfileDataState {
  questions: Array;
  answers: AnswersDto;
  error: String;
}

export const ProfileDataInitialState: ProfileDataState = {
  questions: [],
  answers: [],
  error: ""
};
