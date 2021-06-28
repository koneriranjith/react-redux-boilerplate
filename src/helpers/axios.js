import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_END_URL
});

// const isHandlerEnabled = (config = {}) => {
//   return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
//     ? false
//     : true;
// };

// await axiosInstance.get("/gender/");

const requestHandler = config => {
   const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJjdXN0b21lcl9pZCI6MSwic2NvcGVzIjpbInN5c3RlbV9hZG1pbiJdLCJleHAiOjE1ODE0OTg3MDYsInN1YiI6ImFjY2VzcyJ9.4o4mbiVt4OUHtyaVEFIBpRUJDyayi6hmS8OsMOH9qHo"
  if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
};

const errorHandler = error => {
  return Promise.reject({ ...error });
};

const successHandler = response => {
  return response;
};

axiosInstance.interceptors.request.use(
  config => requestHandler(config),
  error => {
    Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default axiosInstance;
