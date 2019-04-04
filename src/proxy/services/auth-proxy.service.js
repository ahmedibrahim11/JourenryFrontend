import { BASE_URL } from "../../services/http-client/constants";
import {
  UserRegisterModel,
  UserLoginModel,
  UserConfirmModel
} from "../models/index";
import { Application } from "../../application";
export class AuthProxyService {
  async login(user: UserLoginModel) {
    console.log("user", user);
    const data = {};
    data["email"] = user.email;
    data["password"] = user.password;

    return await fetch(`${BASE_URL}auth/login`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  async register(user: UserRegisterModel) {
    const data = {};
    data["email"] = user.email;
    data["password"] = user.password;
    data["name"] = user.userName;
    data["userName"] = user.userName;

    return await fetch(`${BASE_URL}auth/register`, {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  async confirm(user: UserConfirmModel) {
    const data = `grant_type=confirm&membershipid=${user.membershipId}&mobile=${
      user.mobile
    }&pin=${user.pin}&client_id=1&client_secret=p@$$w0rd`;
    return await fetch(`${BASE_URL}/token`, {
      method: "post",
      headers: { "content-Type": "application/x-www-form-urlencoded" },
      body: data
    });
  }
}
