import { AuthProxyService } from "./auth-proxy.service";
import { RequestProxyService } from "./request-proxy.service";
import { ConnectionProxyService } from "./connetion-service";

const authProxyService = new AuthProxyService();
const requestProxyService = new RequestProxyService();
const connectionProxyService = new ConnectionProxyService();

export { authProxyService, requestProxyService, connectionProxyService };
