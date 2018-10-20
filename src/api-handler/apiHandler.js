import axios from "axios";

import {
  STAT_API_CONFIG
} from "./apiConsts.js";

class ApiHandler {

  fetchByCountries(){
    const url = "cistats/country" + applicationId;

    return axios.get(url, STAT_API_CONFIG).then( (response) => {
      return response.data;
    })
      .catch((err) => {
        throw new Error(err.response.statusText);
      });
  }

}

export default ApiHandler;
