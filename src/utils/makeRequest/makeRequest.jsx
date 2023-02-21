import axios from "axios";
import { BACKEND_URL } from "../../constants/apiEndPoints";

export const makeRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const { data } = await axios(requestDetails);
  return data;
};

// module.exports = {
//     makeRequest
// };
