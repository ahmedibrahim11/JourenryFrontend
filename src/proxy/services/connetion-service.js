import { BASE_URL } from "../../services/http-client/constants";
import {
  CartModel,
  OrderModel,
  OrderItemModel,
  ReviewModel
} from "../models/index";
import axios from "axios";

export class ConnectionProxyService {
  async getConnections(userId: number) {
    return await axios.get(`${BASE_URL}journey/allusers/${userId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async getMyConnections(userId: number) {
    return await axios.get(`${BASE_URL}Connection/getConnection/${userId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async getConnectionProfileData(userId: number) {
    return await axios.get(`${BASE_URL}userAnswer/GetUserAnswers/${userId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async acceptConnectionRequest(senderId: number, reciverId: number) {
    debugger;
    return await axios.put(
      `${BASE_URL}Connection/approveConnection/${reciverId}/${senderId}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    );
  }
  async rejectConnectionRequest(senderId: number, reciverId: number) {
    return await axios.get(
      `${BASE_URL}Connection/approveConnection/${senderId}/${reciverId}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    );
  }
  async sendConnectionRequest(senderId: number, reciverId: number) {
    return await axios.post(
      `${BASE_URL}Connection/newConnection/${senderId}/${reciverId}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    );
  }
  //   async acceptReview(orderId: number) {
  //     return await axios.post(`${BASE_URL}/customer/acceptReview/${orderId}`, {
  //       headers: { "Access-Control-Allow-Origin": "*" }
  //     });
  //   }
}
