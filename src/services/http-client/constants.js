const PROD_BASE_URL = "http://journeyappfrontend.azurewebsites.net/";
const DEV_BASE_URL = "http://2e43791f.ngrok.io/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
