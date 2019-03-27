import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { RegisterScreen, LoginScreen } from "../screens";

export const navigator = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen
    },
    LoginScreen: {
      screen: LoginScreen
    },
  },

  {
    initialRouteName: "LoginScreen",
    headerMode: "none"
  }
);

export const Navigator = createAppContainer(navigator);
