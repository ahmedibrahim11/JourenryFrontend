import {
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { RegisterScreen } from "../screens";

export const navigator = createStackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen
    }
  },

  {
    initialRouteName: "RegisterScreen",
    headerMode: "none"
  }
);

export const Navigator = createAppContainer(navigator);
