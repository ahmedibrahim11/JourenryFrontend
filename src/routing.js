import {
  StackNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import {
  RegisterScreen,
  LoginScreen,
  ProfileScreen,
  SettingScreen
} from "./modules/screens";

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
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

export const Navigator = createAppContainer(navigator);

// const TabNavigator = createBottomTabNavigator({
//   Profile: ProfileScreen,
//   Setting: SettingScreen
// });

// export default createAppContainer(TabNavigator);
