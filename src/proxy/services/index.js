import { AuthProxyService } from "./auth-proxy.service";
import { RequestProxyService } from "./request-proxy.service";
import { ConnectionProxyService } from "./connetion-service";
import { ProfileDataCompletingProxyService } from "./profile-data-completing-service";
import { SettingProxyService } from "./setting-proxy.service";
const authProxyService = new AuthProxyService();
const requestProxyService = new RequestProxyService();
const connectionProxyService = new ConnectionProxyService();
const profileDataCompletingProxyService = new ProfileDataCompletingProxyService();
const settingProxyService=new SettingProxyService();

export {
  authProxyService,
  requestProxyService,
  connectionProxyService,
  profileDataCompletingProxyService,
  settingProxyService
};
