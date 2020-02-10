import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { CryptoScreen } from '../screens/CryptoScreen';
import MainScreen from '../screens/MainScreen';

const CryptoNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Crypto: {
      screen: CryptoScreen
    }
  },
  {
    initialRouteName: "Main"
  }
);

export const AppNavigation = createAppContainer(CryptoNavigator);
