export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserRegisterModel {
  userName: string;
  password: string;
  email: string;
  mobileNumber: number;
  gender: number;
}

export interface ChangePasswordModel {
  oldPassword: String;
  newPassword: String;
  confirmPassword: String;
}

export interface ConnectionModel {
  id: number;
  userName: string;
  email: string;
  mobileNumber: number;
  gender: number;
}

export interface ConnectionsDto {
  requests: ConnectionModel[];
}

export interface UserAnswer {
  questionId: Number;
  userId: Number;
  value: String;
}

export interface AnswersDto {
  answers: UserAnswer[];
}
