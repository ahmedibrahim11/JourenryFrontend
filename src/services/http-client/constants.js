const PROD_BASE_URL = "http://198.38.93.243/copyli";
const DEV_BASE_URL = "http://91384984.ngrok.io/";

// const PROD_BASE_URL = "";
const DEV = false;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
