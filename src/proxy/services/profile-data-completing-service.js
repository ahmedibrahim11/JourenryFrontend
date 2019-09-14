import { BASE_URL } from "../../services/http-client/constants";
import {
  CartModel,
  OrderModel,
  OrderItemModel,
  ReviewModel
} from "../models/index";
import axios from "axios";

export class ProfileDataCompletingProxyService {
  async getQuestions() {
    var journeyId = 1;
    return await axios.get(`${BASE_URL}questions/allQuestions/${journeyId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async getUserAnswers(userId) {
    return await axios.get(`${BASE_URL}userAnswer/GetUserAnswers/${userId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async postAnswers(answers) {
    debugger;
    console.log(answers);
    return await axios({
      method: "post",
      url: `${BASE_URL}userAnswer/saveData`,
      data: answers,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
