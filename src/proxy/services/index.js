import { AuthProxyService } from "./auth-proxy.service";
import { RequestProxyService } from "./request-proxy.service";
import { OrderProxyService } from "./order-proxy.service";

const authProxyService = new AuthProxyService();
const requestProxyService = new RequestProxyService();
const orderProxyService = new OrderProxyService();

export { authProxyService, requestProxyService, orderProxyService };
