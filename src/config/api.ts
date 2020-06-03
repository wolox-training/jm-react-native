import { create } from 'apisauce';
import { CamelcaseSerializer } from 'cerealizr';
import Config from 'react-native-config';

import Reactotron from './reactotron';

const deserializer = new CamelcaseSerializer();

const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000
});

export const authApi = create({
  baseURL: Config.AUTH_API_BASE_URL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);
authApi.addMonitor(Reactotron.apisauce);
authApi.addResponseTransform(response => {
  if (response.ok) {
    response.data = deserializer.serialize(response.data.data);
  }
});

export default api;
