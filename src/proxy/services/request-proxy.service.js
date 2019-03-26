import { BASE_URL } from "../../services/http-client/constants";
import { CartModel, OrderModel, OrderItemModel } from "../models/index";
import axios from "axios";

export class RequestProxyService {
  async create(cart: CartModel) {
    return await axios.post(`${BASE_URL}/request`, cart, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }

  async getPending(customerId: number) {
    return await axios.get(`${BASE_URL}/customer/pendingRequests/${customerId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }

  async getBids(requestId: number) {
    return await axios.get(`${BASE_URL}/customer/requestBids/${requestId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }

  async acceptBid(bidId: number) {
    return await axios.post(`${BASE_URL}/customer/acceptBid/${bidId}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
}
