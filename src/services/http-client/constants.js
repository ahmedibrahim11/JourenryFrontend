const PROD_BASE_URL = "";
const DEV_BASE_URL = "http://2fa0e9fd.ngrok.io/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
