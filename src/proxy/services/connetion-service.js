import { BASE_URL } from "../../services/http-client/constants";
import {
  CartModel,
  OrderModel,
  OrderItemModel,
  ReviewModel
} from "../models/index";
import axios from "axios";

export class ConnectionProxyService {
  async getConnections(journeyId: number) {
    return await axios.get(`${BASE_URL}journey/allusers/${journeyId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async getConnectionProfileData(userId: number) {
    return await axios.get(`${BASE_URL}journey/allusers/${journeyId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async acceptConnectionRequest(senderId: number, reciverId: number) {
    return await axios.get(`${BASE_URL}journey/allusers/${journeyId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async rejectConnectionRequest(senderId: number, reciverId: number) {
    return await axios.get(`${BASE_URL}journey/allusers/${journeyId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
  async sendConnectionRequest(senderId: number, reciverId: number) {
    return await axios.get(
      `${BASE_URL}Connection/newconnection/${senderId}/${reciverId}`,
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
