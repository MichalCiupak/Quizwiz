import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

const AxiosInstance = (userName: string, password: string) => {
  return axios.create({
    baseURL: API_URL,
    auth: {
      username: userName,
      password: password
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
};

export default AxiosInstance;
