const PROD_BASE_URL = "http://journeyappfrontend.azurewebsites.net/";
const DEV_BASE_URL = "http://d097809c.ngrok.io/";

const DEV = true;

export const BASE_URL = DEV ? DEV_BASE_URL : PROD_BASE_URL;
export const REQEUST_UPLOAD = BASE_URL + "/request/upload/1";
