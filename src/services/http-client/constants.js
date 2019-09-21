const PROD_BASE_URL = "";
const DEV_BASE_URL = "http://03767681.ngrok.io/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
