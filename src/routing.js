import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { RegisterScreen, LoginScreen } from "./modules/screens";

import HS from "./modules/screens/home-screen";

export const navigator = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen
    },
    LoginScreen: {
      screen: LoginScreen
    },
    HomeScreen: {
      screen: HS
    }
  },

  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);

export const Navigator = createAppContainer(navigator);
