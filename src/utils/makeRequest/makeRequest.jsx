import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";
import { useNavigate } from "react-router-dom";

export const makeRequest = async (
  apiEndPoint,
  dynamicConfig = {},
  navigate = useNavigate
) => {
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
    if(navigate){
      const errorStatus = error.response?.status;
      if(errorStatus){
        navigate(`/error/${errorStatus}`);
      }else {
        navigate(`/error`);
      }
    }
    
  }
};
