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

  //   async acceptReview(orderId: number) {
  //     return await axios.post(`${BASE_URL}/customer/acceptReview/${orderId}`, {
  //       headers: { "Access-Control-Allow-Origin": "*" }
  //     });
  //   }
}
