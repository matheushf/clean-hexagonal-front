import axios from 'axios';
import { HttpI } from '@clean-front/shared';

export const AxiosAdapter: HttpI = {
  get(path, config) {
    return axios.get(path, config).then((response) => response.data);
  },
  post(path, params?, config?) {
    return axios.post(path, params, config).then((response) => response.data);
  },
  put(path, params?, config?) {
    return axios.put(path, params, config);
  },
  delete(path, config?) {
    return axios.delete(path, config);
  },
};
