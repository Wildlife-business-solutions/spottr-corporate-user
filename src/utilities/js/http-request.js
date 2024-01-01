import axios from "axios";
import { secureStorage } from "./encryption";

const endPoint = "https://newbackendapi.azurewebsites.net";
// const endPoint = "https://prod-newbackend-spottr-nextjs.azurewebsites.net";

export default function HttpRequest(baseURL = "/") {
  const decryptedData = secureStorage.getItem("auth");
  const authToken = decryptedData ? JSON.parse(decryptedData).token : "";
  const Axios = axios.create({
    responseType: "json",
    baseURL: `${endPoint}${baseURL}`,
  });
  Axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
  });
  return Axios;
}
