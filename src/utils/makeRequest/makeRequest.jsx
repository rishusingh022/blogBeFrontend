import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";
import { NavigateFunction } from "react-router-dom";

export const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  try {
    const requestDetails = {
      baseURL: BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (error) {
    // if(NavigateFunction){
    //   const errorStatus = error.response?.status;
    //   if(errorStatus){
    //     NavigateFunction(`/error/${errorStatus}`);
    //   }else {
    //     NavigateFunction(`/error/500`);
    //   }
    // }
  }
};
