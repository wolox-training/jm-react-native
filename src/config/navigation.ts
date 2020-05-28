import { white, blue, gray2 } from '@constants/colors';
import HeaderBackground from '@components/HeaderBackground';
import BackButton from '@components/BackButton';

export const stackNavigatorConfig = {
  headerTitleStyle: {
    fontSize: 16,
    color: white,
    fontWeight: '600',
    letterSpacing: -0.4
  },
  headerStyle: { height: 100 },
  headerBackTitleVisible: false,
  headerBackground: HeaderBackground,
  headerBackImage: BackButton
};

export const tabNavigatorConfig = {
  labelStyle: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.15
  },
  activeTintColor: blue,
  inactiveTintColor: gray2
};
