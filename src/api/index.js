import axios from 'axios';
import config from '../config';

const serverUrl = `${config.protocol}://${config.host}:${config.port}`;

const callAPI = (method, url, data = {}, timeout = 8000) => {
  return axios({
    url: serverUrl + url,
    timeout,
    data,
    method
  }).then((response) => {
    if (response.status === 401) {
      window.location.href = '/';
    }
    return response;
  });
  // .catch((err) => {});
};

export default callAPI;
