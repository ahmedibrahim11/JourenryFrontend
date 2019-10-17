
import {BASE_URL} from "../../services/http-client/constants";

import axios from "axios";

export class SettingProxyService{
    async SumbitFeedback(feedback:String,id:Number){
      debugger;
        return await axios({
            method: "post",
            url: `${BASE_URL}user/feedback/${id}`,
            data: feedback,
            config: {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "content-Type": "application/json"
              }
            } 
        })
    }
}