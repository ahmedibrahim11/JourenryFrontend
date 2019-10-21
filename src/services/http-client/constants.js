const PROD_BASE_URL = "http://journeyappfrontend.azurewebsites.net/";
const DEV_BASE_URL = "http://a1be7776.ngrok.io/";

const DEV = false;;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
