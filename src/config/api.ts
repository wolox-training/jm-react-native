import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';

import STORAGE from '@constants/storage';

const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);

AsyncStorage.getItem(STORAGE.authHeaders).then(headers => {
  if (headers) {
    api.setHeaders(JSON.parse(headers));
  }
});

export default api;
