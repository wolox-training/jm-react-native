import { create } from 'apisauce';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';

const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);
export default api;
