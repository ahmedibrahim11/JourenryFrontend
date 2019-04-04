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

export interface ConnectionModel {
  id: number;
  userName: string;
  password: string;
  email: string;
  mobileNumber: number;
  gender: number;
}

export interface ConnectionsDto {
  requests: ConnectionModel[];
}
// export enum Gender{
//   male=0,female=1
// }
